import stylelint, { Rule, RuleMeta } from 'stylelint';
import { customExpected, expected, failedToFix } from './lib/validation';
import { ruleName, SecondaryOptions, RegExpString } from './defaults';
declare const meta: RuleMeta;
declare const messages: {
    expected: typeof expected;
    customExpected: typeof customExpected;
    failedToFix: typeof failedToFix;
};
/**
 * A string or regular expression matching a CSS property name.
 */
declare type CSSPropertyName = string | RegExpString;
/**
 * Primary options, a CSS property or list of CSS properties to lint.
 * - Regular Expression strings are supported
 */
declare type PrimaryOptions = CSSPropertyName | CSSPropertyName[];
/**
 * Stylelint declaration strict value rule function.
 *
 * @see https://stylelint.io/developer-guide/plugins
 * @param properties - Primary options, a CSS property or list of CSS properties to lint.
 * @param options- Secondary options, configure edge cases.
 * @param context - Only used for autofixing.
 *
 * @returns Returns a PostCSS Plugin.
 */
declare type StylelintPlugin<P = unknown, S = unknown> = Rule<P, S>;
declare const ruleFunction: StylelintPlugin<PrimaryOptions, SecondaryOptions>;
declare const declarationStrictValuePlugin: stylelint.Plugin;
export default declarationStrictValuePlugin;
export { ruleName, messages, meta, ruleFunction as rule };
