import stylelint from 'stylelint'

import { validProperties, validOptions, expected, getTypes, getIgnoredKeywords } from './lib/validation'
import defaults from './defaults'

const ruleName = 'scale-unlimited/declaration-strict-value'
const utils = stylelint.utils
const messages = utils.ruleMessages(ruleName, {
  expected,
})
const reSkipProp = /^(?:@|\$|--).+$/
const reVar = /^-?(?:@.+|\$.+|var\(--.+\))$/
const reFunc = /^(?!var\(--).+\(.+\)$/

const rule = (properties, options, context) =>
  (root, result) => {
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
    const { ignoreVariables, ignoreFunctions, ignoreKeywords } = config
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
       * @param {Object} node - A Declaration-Node from PostCSS AST-Parser.
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

        if(context.fix){
          //only if a fix code is available from config
          if(options.ignoreKeywords[property+"-fix"]) {
            //take the fix function from the config
            var valueToVariables = new Function('a', options.ignoreKeywords[property+"-fix"]); //creates a function called valueToVariables. the unminified function is located in fix.js
            node.value = valueToVariables(node.value);
          }
        }

        // report only if all failed
        if (!validVar && !validFunc && !validKeyword) {
          const types = getTypes(config, property)
          const { raws } = node
          const { start } = node.source

          utils.report({
            ruleName,
            result,
            node,
            line: start.line,
            column: start.column + prop.length + raws.between.length,
            message: messages.expected(types, value, prop),
          })
        }
      }
    })
  }

rule.primaryOptionArray = true

const declarationStrictValuePlugin = stylelint.createPlugin(ruleName, rule)

export default declarationStrictValuePlugin
export { ruleName, messages }
