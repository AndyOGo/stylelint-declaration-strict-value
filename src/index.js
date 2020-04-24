import stylelint from 'stylelint'

import {
  validProperties, validOptions, expected, getTypes, getIgnoredKeywords, getAutoFixFunc,
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
const reSkipProp = /^(?:@|\$|--).+$/
// Sass namespaces and CSS <ident-token>
// @see: https://github.com/sass/sass/blob/master/accepted/module-system.md#member-references
// @see:  https://drafts.csswg.org/css-syntax-3/#ident-token-diagram
// eslint-disable-next-line no-control-regex
const reVar = /^-?(?:@.+|(?:(?:[a-zA-Z_-]|[^\x00-\x7F])+(?:[a-zA-Z0-9_-]|[^\x00-\x7F])*\.)?\$.+|var\(\s*--[\s\S]+\))$/
const reFunc = /^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/

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
 * @param {import('./defaults').SecondaryOptions} [options=defaults] - Secondary options, configure edge cases.
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
    ignoreVariables, ignoreFunctions, ignoreKeywords, message, disableFix, autoFixFunc,
  } = config
  const autoFixFuncNormalized = getAutoFixFunc(autoFixFunc)
  const reKeywords = ignoreKeywords ? {} : null

  // loop through all properties
  properties.forEach((property) => {
    let propFilter = property

    // parse RegExp
    if (propFilter.charAt(0) === '/' && propFilter.slice(-1) === '/') {
      propFilter = new RegExp(propFilter.slice(1, -1))
    }

    // walk through all declarations filtered by configured properties
    root.walkDecls(propFilter, lintDeclStrictValue)

    /**
     * Lint usages of declarations values againts, variables, functions
     * or custum keywords - as configured.
     *
     * @callback
     * @param {object} node - A Declaration-Node from PostCSS AST-Parser.
     */
    function lintDeclStrictValue(node) {
      const { value, prop } = node

      // skip variable declarations
      if (reSkipProp.test(prop)) return

      // falsify everything by default
      let validVar = false
      let validFunc = false
      let validKeyword = false

      // test variable
      if (ignoreVariables) {
        validVar = reVar.test(value)
      }

      // test function
      if (ignoreFunctions && !validVar) {
        validFunc = reFunc.test(value)
      }

      // test keywords
      if (ignoreKeywords && (!validVar || !validFunc)) {
        let reKeyword = reKeywords[property]

        if (!reKeyword) {
          const ignoreKeyword = getIgnoredKeywords(ignoreKeywords, property)

          if (ignoreKeyword) {
            reKeyword = new RegExp(`^${ignoreKeyword.join('|')}$`)
            reKeywords[property] = reKeyword
          }
        }

        if (reKeyword) {
          validKeyword = reKeyword.test(value)
        }
      }

      // report only if all failed
      if (!validVar && !validFunc && !validKeyword) {
        const types = getTypes(config, property)
        const { raws } = node
        const { start } = node.source

        // support auto fixing
        if (context.fix && !disableFix) {
          const fixedValue = autoFixFuncNormalized(node, { validVar, validFunc, validKeyword }, root, config)

          // apply fixed value if returned
          if (fixedValue) {
            // eslint-disable-next-line no-param-reassign
            node.value = fixedValue
          }
        } else {
          utils.report({
            ruleName,
            result,
            node,
            line: start.line,
            column: start.column + prop.length + raws.between.length,
            message: messages.expected(types, value, prop, message),
          })
        }
      }
    }
  })
}

ruleFunction.primaryOptionArray = true

const declarationStrictValuePlugin = stylelint.createPlugin(ruleName, ruleFunction)

export default declarationStrictValuePlugin
export { ruleName, messages }
