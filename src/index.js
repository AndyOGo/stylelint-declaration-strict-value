import stylelint from 'stylelint'
import shortCSS from 'shortcss'

import {
  validProperties, validOptions, expected, getTypes, getIgnoredVariablesOrFunctions, getIgnoredKeywords, getIgnoredValues, getAutoFixFunc,
} from './lib/validation'
import defaults from './defaults'

/**
 * Rule Name.
 *
 * @constant {string}
 * @default
 */
const ruleName = 'scale-unlimited/declaration-strict-value'
const { utils } = stylelint
const messages = utils.ruleMessages(ruleName, {
  expected,
})
/**
 * RegExp to skip non-CSS properties.
 *
 * @constant  {RegExp}
 * @default
 */
const reSkipProp = /^(?:@|\$|--).+$/
/**
 * RegExp to parse CSS, SCSS and less variables.
 * - allowing CSS variables to be multi line
 * - Sass namespaces and CSS <ident-token> supported
 *
 * @see https://github.com/sass/sass/blob/master/accepted/module-system.md#member-references
 * @see  https://drafts.csswg.org/css-syntax-3/#ident-token-diagram
 * @constant {RegExp}
 * @default
 */
// eslint-disable-next-line no-control-regex
const reVar = /^-?(?:@.+|(?:(?:[a-zA-Z_-]|[^\x00-\x7F])+(?:[a-zA-Z0-9_-]|[^\x00-\x7F])*\.)?\$.+|var\(\s*--[\s\S]+\))$/
/**
 * RegExp to parse functions.
 * - irgnoring CSS variables `var(--*)`
 * - allow multi line arguments
 *
 * @constant  {RegExp}
 * @default
 */
const reFunc = /^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/
/**
 * RegExp to parse regular expressions.
 * - supporting patterns
 * - and optional flags
 *
 * @constant  {RegExp}
 * @default
 */
const reRegex = /^\/(.*)\/([a-zA-Z]*)$/
const isRegexString = (value) => reRegex.test(value)
const getRegexString = (value) => value.match(reRegex).slice(1)
const stringToRegex = (value) => new RegExp(...getRegexString(value))
const mapIgnoreValue = (ignoreValue) => (isRegexString(ignoreValue) ? stringToRegex(ignoreValue) : new RegExp(`^${ignoreValue}$`))

/**
 * A rule function essentially returns a little PostCSS plugin.
 * It will report violations of this rule.
 *
 * @typedef {Function} PostCSSPlugin
 * @param {object} root - PostCSS root (the parsed AST).
 * @param {object} result - PostCSS lazy result.
 */

/**
 * Stylelint declaration strict value rule function.
 *
 * @see https://stylelint.io/developer-guide/plugins
 * @param {string|string[]} properties - Primary options, a CSS property or list of CSS properties to lint.
 * @param {SecondaryOptions} [options=defaults] - Secondary options, configure edge cases.
 * @param {*} [context] - Only used for autofixing.
 *
 * @returns {PostCSSPlugin} - Returns a PostCSS Plugin.
 */
const ruleFunction = (properties, options, context = {}) => (root, result) => {
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
    },
  )

  if (!hasValidOptions) return

  // normalize options
  if (!Array.isArray(properties)) {
    // eslint-disable-next-line no-param-reassign
    properties = [properties]
  }

  const config = {
    ...defaults,
    ...options,
  }
  const {
    ignoreVariables, ignoreFunctions, ignoreKeywords, ignoreValues, message, disableFix, autoFixFunc, expandShorthand, recurseLonghand,
  } = config
  const autoFixFuncNormalized = getAutoFixFunc(autoFixFunc)
  const reKeywords = ignoreKeywords ? {} : null
  const reValues = ignoreValues ? {} : null
  let cssLoaderValues = []

  if (ignoreVariables) {
    root.walkAtRules('value', (rule) => {
      const { params } = rule
      const name = params.split(':')[0].trim()

      cssLoaderValues.push(name)
    })

    cssLoaderValues = new RegExp(`^-?(:?${cssLoaderValues.join('|')})$`)
  }

  // loop through all properties
  properties.forEach((property) => {
    let propFilter = property

    // parse RegExp
    if (isRegexString(propFilter)) {
      propFilter = stringToRegex(propFilter)
    }

    // walk through all declarations filtered by configured properties
    root.walkDecls(filterDecl)

    /**
     * Filter declarations for matching properties and expand shorthand properties.
     *
     * @callback
     * @param {object} node - A Declaration-Node from PostCSS AST-Parser.
     */
    function filterDecl(node) {
      const { value, prop } = node

      // skip variable declarations
      if (reSkipProp.test(prop)) return

      const isShortHand = expandShorthand && shortCSS.isShorthand(prop)

      if (prop === propFilter || (!isShortHand && propFilter instanceof RegExp && propFilter.test(prop))) {
        lintDeclStrictValue(node)
      } else if (isShortHand) {
        const expandedProps = shortCSS.expand(prop, value, recurseLonghand)
        let failedFlag = false

        Object.keys(expandedProps).forEach((longhandProp) => {
          const longhandValue = expandedProps[longhandProp]

          if (!failedFlag && (longhandProp === propFilter || (propFilter instanceof RegExp && propFilter.test(longhandProp)))) {
            failedFlag = lintDeclStrictValue(node, longhandProp, longhandValue)
          }
        })
      }
    }

    /**
     * Lint usages of declarations values againts, variables, functions
     * or custum keywords - as configured.
     *
     * @callback
     * @param {object} node - A Declaration-Node from PostCSS AST-Parser.
     * @param {string} [longhandProp] - A Declaration-Node from PostCSS AST-Parser.
     * @param {string} [longhandValue] - A Declaration-Node from PostCSS AST-Parser.
     *
     * @returns {boolean} Returns `true` if invalid declaration found, else `false`.
     */
    function lintDeclStrictValue(node, longhandProp, longhandValue) {
      const { value: nodeValue, prop: nodeProp } = node
      const value = longhandValue || nodeValue

      // falsify everything by default
      let validVar = false
      let validFunc = false
      let validKeyword = false
      let validValue = false

      // test variable
      if (ignoreVariables) {
        const ignoreVariable = getIgnoredVariablesOrFunctions(ignoreVariables, property)

        if (ignoreVariable) {
          validVar = reVar.test(value) || cssLoaderValues.test(value)
        }
      }

      // test function
      if (ignoreFunctions && !validVar) {
        const ignoreFunction = getIgnoredVariablesOrFunctions(ignoreFunctions, property)

        if (ignoreFunction) {
          validFunc = reFunc.test(value)
        }
      }

      // test keywords
      if (ignoreKeywords && (!validVar || !validFunc)) {
        let reKeyword = reKeywords[property]

        if (!reKeyword) {
          const ignoreKeyword = getIgnoredKeywords(ignoreKeywords, property)

          if (ignoreKeyword) {
            reKeyword = new RegExp(`^${ignoreKeyword.join('$|^')}$`)
            reKeywords[property] = reKeyword
          }
        }

        if (reKeyword) {
          validKeyword = reKeyword.test(value)
        }
      }

      if (ignoreValues && (!validVar || !validFunc || !validKeyword)) {
        let reValueList = reValues[property]

        if (!reValueList) {
          const ignoreValue = getIgnoredValues(ignoreValues, property)

          if (ignoreValue) {
            reValueList = ignoreValue.map(mapIgnoreValue)
            reValues[property] = reValueList
          }
        }

        if (reValueList) {
          validValue = reValueList.filter((reValue) => reValue.test(value)).length > 0
        }
      }

      // report only if all failed
      if (!validVar && !validFunc && !validKeyword && !validValue) {
        const types = getTypes(config, property)

        // support auto fixing
        if (context.fix && !disableFix) {
          const fixedValue = autoFixFuncNormalized(node, {
            validVar,
            validFunc,
            validKeyword,
            validValue,
            longhandProp,
            longhandValue,
          }, root, config)

          // apply fixed value if returned
          if (fixedValue) {
            // eslint-disable-next-line no-param-reassign
            node.value = fixedValue
          }
        } else {
          const { raws } = node
          const { start } = node.source

          utils.report({
            ruleName,
            result,
            node,
            line: start.line,
            column: start.column + nodeProp.length + raws.between.length,
            message: messages.expected(types, value, nodeProp, message),
          })
        }

        return true
      }

      return false
    }
  })
}

ruleFunction.primaryOptionArray = true

const declarationStrictValuePlugin = stylelint.createPlugin(ruleName, ruleFunction)

export default declarationStrictValuePlugin
export { ruleName, messages }
