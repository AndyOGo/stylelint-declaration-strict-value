import type { Declaration, Root, AtRule } from 'postcss';
import stylelint, { PostcssResult, Rule, RuleMeta } from 'stylelint';
// eslint-disable-next-line import/no-extraneous-dependencies
import shortCSS from 'shortcss';
// eslint-disable-next-line import/no-extraneous-dependencies
import list from 'shortcss/lib/list';

import {
  validProperties,
  validOptions,
  expectedTypes,
  customExpected,
  expected,
  getTypes,
  getIgnoredVariablesOrFunctions,
  getIgnoredKeywords,
  getIgnoredValues,
  getAutoFixFunc,
  getIgnoredAtRules,
} from './lib/validation';
import defaults, { ruleName, SecondaryOptions, RegExpString } from './defaults';
import {
  checkCssValue,
  findAtRules,
  isRegexString,
  mapIgnoreValue,
  reFunc,
  reSkipProp,
  reVar,
  stringToRegex,
} from './lib/utils';

const { utils } = stylelint;
const meta: RuleMeta = {
  url: 'https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/master/README.md',
  fixable: true,
};
const messages = utils.ruleMessages(ruleName, {
  expected,
  customExpected,
});

/**
 * A string or regular expression matching a CSS property name.
 */
type CSSPropertyName = string | RegExpString;

/**
 * Primary options, a CSS property or list of CSS properties to lint.
 * - Regular Expression strings are supported
 */
type PrimaryOptions = CSSPropertyName | CSSPropertyName[];

/**
 * Stylelint declaration strict value rule function.
 *
 * @see https://stylelint.io/developer-guide/plugins
 * @param properties - Primary options, a CSS property or list of CSS properties to lint.
 * @param options- Secondary options, configure edge cases.
 *
 * @returns Returns a PostCSS Plugin.
 */
type StylelintPlugin<P = unknown, S = unknown> = Rule<P, S>;

const ruleFunction: StylelintPlugin<PrimaryOptions, SecondaryOptions> =
  (properties: PrimaryOptions, options: SecondaryOptions) =>
  (root: Root, result: PostcssResult) => {
    // fix #142
    // @see https://github.com/stylelint/stylelint/pull/672/files#diff-78f1c80ffb2836008dd194b3b0ca28f9b46e4897b606f0b3d25a29e57a8d3e61R74
    // @see https://stylelint.io/user-guide/configure#message
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (
      result &&
      (result as any).stylelint &&
      (result as any).stylelint.customMessages &&
      (result as any).stylelint.customMessages[ruleName]
    ) {
      // eslint-disable-next-line no-param-reassign
      delete (result as any).stylelint.customMessages[ruleName];
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */

    // validate stylelint plugin options
    const hasValidOptions = utils.validateOptions(
      result,
      ruleName,
      {
        actual: properties,
        possible: validProperties,
      },
      {
        actual: options,
        possible: validOptions,
        optional: true,
      }
    );

    if (!hasValidOptions) return;

    // normalize options
    if (!Array.isArray(properties)) {
      // eslint-disable-next-line no-param-reassign
      properties = [properties];
    }

    const config: SecondaryOptions = {
      ...defaults,
      ...options,
    };
    const {
      ignoreVariables,
      ignoreFunctions,
      ignoreKeywords,
      ignoreValues,
      ignoreAtRules,
      message,
      disableFix,
      autoFixFunc,
      expandShorthand,
      recurseLonghand,
    } = config;
    const autoFixFuncNormalized = getAutoFixFunc(autoFixFunc);
    /**
     * A hash of regular expression to ignore for a CSS properties.
     * @internal
     */
    interface RegExpMap {
      // [key: CSSPropertyName]: RegExp;
      [key: string]: RegExp;
    }
    /**
     * A hash of regular expression to ignore for a CSS properties or `null`.
     * @internal
     */
    type RegExpKeywordMap = null | RegExpMap;
    /**
     * A hash of regular expression lists to ignore for a CSS property.
     * @internal
     */
    interface RegExpList {
      // [key: CSSPropertyName]: RegExp[];
      [key: string]: RegExp[];
    }
    /**
     * A hash of regular expression lists to ignore for a CSS property or `null`.
     * @internal
     */
    type RegExpValuesList = null | RegExpList;
    const reKeywords: RegExpKeywordMap = ignoreKeywords ? {} : null;
    const reValues: RegExpValuesList = ignoreValues ? {} : null;
    let cssLoaderValues: RegExp;

    if (ignoreVariables) {
      const cssLoaderValuesNames: string[] = [];
      root.walkAtRules('value', (rule: AtRule) => {
        const { params } = rule;
        const name = params.split(':')[0].trim();

        cssLoaderValuesNames.push(name);
      });

      cssLoaderValues = new RegExp(`^-?(:?${cssLoaderValuesNames.join('|')})$`);
    }

    // loop through all properties
    properties.forEach((property) => {
      let propFilter: string | RegExp = property;

      // parse RegExp
      if (isRegexString(propFilter)) {
        propFilter = stringToRegex(propFilter);
      }

      // walk through all declarations filtered by configured properties
      root.walkDecls(filterDecl);

      /**
       * Filter declarations for matching properties and expand shorthand properties.
       *
       * @internal
       * @param node - A Declaration-Node from PostCSS AST-Parser.
       */
      function filterDecl(node: Declaration) {
        const { value, prop } = node;

        // skip variable declarations
        if (reSkipProp.test(prop)) return;

        const isShortHand = expandShorthand && shortCSS.isShorthand(prop);

        if (
          prop === propFilter ||
          (!isShortHand &&
            propFilter instanceof RegExp &&
            propFilter.test(prop))
        ) {
          const values: string[] = list.space(value);

          // handle multi-value props, like scrollbar-color
          if (values.length > 1) {
            let failedFlag = false;

            values.forEach((valueItem) => {
              if (!failedFlag) {
                failedFlag = lintDeclStrictValue(node, prop, valueItem);
              }
            });
          } else {
            lintDeclStrictValue(node);
          }
        } else if (isShortHand) {
          const expandedProps = shortCSS.expand(prop, value, recurseLonghand);
          let failedFlag = false;

          Object.keys(expandedProps).forEach((longhandProp) => {
            const longhandValue = expandedProps[longhandProp];

            if (
              !failedFlag &&
              (longhandProp === propFilter ||
                (propFilter instanceof RegExp && propFilter.test(longhandProp)))
            ) {
              failedFlag = lintDeclStrictValue(
                node,
                longhandProp,
                longhandValue,
                true
              );
            }
          });
        }
      }

      /**
       * Lint usages of declarations values against, variables, functions
       * or custom keywords - as configured.
       *
       * @internal
       * @param node - A Declaration-Node from PostCSS AST-Parser.
       * @param longhandProp - A Declaration-Node from PostCSS AST-Parser.
       * @param longhandValue - A Declaration-Node from PostCSS AST-Parser.
       * @param isExpanded - Whether or not this declaration was expanded.
       * @returns Returns `true` if invalid declaration found, else `false`.
       */
      function lintDeclStrictValue(
        node: Declaration,
        longhandProp?: string,
        longhandValue?: string,
        isExpanded = false
      ) {
        const { value: nodeValue, prop: nodeProp } = node;
        const value = longhandValue || nodeValue;

        if (ignoreAtRules) {
          const ignoreAtRuleList = getIgnoredAtRules(
            ignoreAtRules,
            nodeProp,
            longhandProp
          );

          if (ignoreAtRuleList && ignoreAtRuleList.length) {
            const atRules = findAtRules(node);

            if (
              atRules.length &&
              ignoreAtRuleList.some((ignoreAtRule) => {
                const reIgnoreAtRule = mapIgnoreValue(ignoreAtRule);

                return atRules.some((atRule) => reIgnoreAtRule.test(atRule));
              })
            ) {
              return false;
            }
          }
        }

        // falsify everything by default
        let validVar = false;
        let validFunc = false;
        let validKeyword = false;
        let validValue = false;

        // test variable
        if (ignoreVariables) {
          // @TODO: deviant regexes to primary options need to be evaluated
          const ignoreVariable = getIgnoredVariablesOrFunctions(
            ignoreVariables,
            property
          );

          if (ignoreVariable) {
            validVar = reVar.test(value) || cssLoaderValues.test(value);
          }
        }

        // test function
        if (ignoreFunctions && !validVar) {
          // @TODO: deviant regexes to primary options need to be evaluated
          const ignoreFunction = getIgnoredVariablesOrFunctions(
            ignoreFunctions,
            property
          );

          if (ignoreFunction) {
            validFunc = reFunc.test(value);
          }
        }

        // test expanded shorthands are valid
        if (
          isExpanded &&
          (!ignoreVariables || (ignoreVariables && !validVar)) &&
          (!ignoreFunctions || (ignoreFunctions && !validFunc)) &&
          checkCssValue(longhandProp!, longhandValue!) !== true
        ) {
          return false;
        }

        // test keywords
        if (ignoreKeywords && (!validVar || !validFunc)) {
          let reKeyword = reKeywords![property];

          if (!reKeyword) {
            const ignoreKeyword = getIgnoredKeywords(ignoreKeywords, property);

            if (ignoreKeyword) {
              reKeyword = new RegExp(`^${ignoreKeyword.join('$|^')}$`);
              reKeywords![property] = reKeyword;
            }
          }

          if (reKeyword) {
            validKeyword = reKeyword.test(value);
          }
        }

        if (ignoreValues && (!validVar || !validFunc || !validKeyword)) {
          let reValueList = reValues![property];

          if (!reValueList) {
            const ignoreValue = getIgnoredValues(ignoreValues, property);

            if (ignoreValue) {
              reValueList = ignoreValue.map(mapIgnoreValue);
              reValues![property] = reValueList;
            }
          }

          if (reValueList) {
            validValue =
              reValueList.filter((reValue) => reValue.test(value)).length > 0;
          }
        }

        // report only if all failed
        if (!validVar && !validFunc && !validKeyword && !validValue) {
          const types = getTypes(config, property);
          // eslint-disable-next-line prefer-destructuring
          const start = node.source!.start;
          // eslint-disable-next-line prefer-destructuring
          const end = node.source!.end;

          const fix =
            !disableFix && autoFixFuncNormalized
              ? () => {
                  try {
                    const fixedValue = autoFixFuncNormalized(
                      node,
                      {
                        validVar,
                        validFunc,
                        validKeyword,
                        validValue,
                        longhandProp,
                        longhandValue,
                      },
                      root,
                      config
                    );

                    // apply fixed value if returned
                    if (fixedValue) {
                      // eslint-disable-next-line no-param-reassign
                      node.value = fixedValue;
                    }
                  } catch {
                    // autofix failed, let stylelint report the original warning
                  }
                }
              : undefined;

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          utils.report({
            ruleName,
            result,
            node,
            start: { line: start!.line, column: start!.column },
            end: { line: end!.line, column: end!.column },
            message: message
              ? messages.customExpected(
                  expectedTypes(types),
                  value,
                  nodeProp,
                  message
                )
              : messages.expected(expectedTypes(types), value, nodeProp),
            fix,
          });

          return true;
        }

        return false;
      }
    });
  };

ruleFunction.primaryOptionArray = true;
ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

const declarationStrictValuePlugin = stylelint.createPlugin(
  ruleName,
  ruleFunction
);

export default declarationStrictValuePlugin;
export { ruleName, messages, meta, ruleFunction as rule };
