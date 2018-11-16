import stylelint from 'stylelint'
import valuesParser from 'postcss-values-parser'

import {
  reSkipProp, validProperties, validOptions, expected, getTypes, getIgnoredKeywords, getAutoFixFunc,
} from './lib/validation'
import getNode from './lib/get-node'
import defaults from './defaults'

const ruleName = 'scale-unlimited/declaration-strict-value'
const { utils } = stylelint
const messages = utils.ruleMessages(ruleName, {
  expected,
})

const rule = (properties, options, context = {}) => (root, result) => {
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
    ignoreVariables, ignoreNumbers, ignoreColors, ignoreOperators, ignoreFunctions, ignoreKeywords, message, disableFix, autoFixFunc, loose,
  } = config
  const isComplexIgnoreFunctions = typeof ignoreFunctions === 'object'
  const ignoreNested = isComplexIgnoreFunctions ? ignoreFunctions.ignoreNested : !!ignoreFunctions
  const ignoreNumberArgs = isComplexIgnoreFunctions ? ignoreFunctions.ignoreNumbers : !!ignoreFunctions
  const ignoreColorArgs = isComplexIgnoreFunctions ? ignoreFunctions.ignoreColors : !!ignoreFunctions
  const ignoreOperatorsInArgs = isComplexIgnoreFunctions ? ignoreFunctions.ignoreOperators : !!ignoreFunctions
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
    root.walkDecls(propFilter, lintDeclStrictValues)

    /**
     * Lint usages of declarations values againts, variables, functions
     * or custom keywords - as configured.
     *
     * @param {Object} node - A Declaration-Node from PostCSS AST-Parser.
     */
    function lintDeclStrictValues(nodes) {
      const { value: values, prop } = nodes

      // skip variable declarations
      if (reSkipProp.test(prop)) return

      try {
        const valueAst = valuesParser(values, {
          loose,
        }).parse()

        valueAst.first.walk(lintDeclStrictValue)
      } catch (error) {
        const types = getTypes(config, property)
        const { source: { start: { line } } } = nodes

        utils.report({
          ruleName,
          result,
          node: nodes,
          line,
          message: messages.expected(types, values, prop, message),
        })
      }

      // eslint-disable-next-line consistent-return
      function lintDeclStrictValue(node) {
        // important prevent walk of children by returning false
        if (node.parent.skipChildren) return false

        const { type, parent } = getNode(node)
        const rawValue = node.toString().trim()
        const isParentFunc = parent.type === 'func'
        // falsify everything by default
        let validVar = false
        let validFunc = false
        let validKeyword = false
        let validOperator = false

        // skip root, comment, comma and paren nodes
        if (type === 'root' || type === 'comment' || type === 'comma' || type === 'paren') {
          return // eslint-disable-line consistent-return
        }

        // test variable
        if (ignoreVariables) {
          validVar = type === 'var'
        }

        // test function
        if (ignoreFunctions && !validVar && type === 'func'
          && ((isParentFunc && ignoreNested) || !isParentFunc)) {
          validFunc = true
        }

        if (type === 'number'
          && ((isParentFunc && ignoreNumberArgs)
          || (!isParentFunc && ignoreNumbers))) {
          return // eslint-disable-line consistent-return
        }

        if (type === 'word' && node.isColor
          && ((isParentFunc && ignoreColorArgs)
          || (!isParentFunc && ignoreColors))) {
          return // eslint-disable-line consistent-return
        }

        if (type === 'operator'
          && ((isParentFunc && ignoreOperatorsInArgs)
          || (!isParentFunc && ignoreOperators))) {
          validOperator = true
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
            validKeyword = reKeyword.test(rawValue)
          }
        }

        // report only if all failed
        if (!validVar && !validFunc && !validKeyword && !validOperator) {
          // if invalid found, no need to walk through the rest
          // one error at a time
          let skipAllParent = node
          while (skipAllParent) {
            // eslint-disable-next-line no-param-reassign
            skipAllParent.skipChildren = true
            skipAllParent = skipAllParent.parent
          }

          // support auto fixing
          if (context.fix && !disableFix) {
            const fixedValue = autoFixFuncNormalized(node, nodes, { validVar, validFunc, validKeyword, validOperator }, root, config)

            // apply fixed value if returned
            if (fixedValue) {
              // eslint-disable-next-line no-param-reassign
              node.value = fixedValue
            }
          } else {
            const types = getTypes(config, property)
            const { source: { start: { line } } } = nodes

            utils.report({
              ruleName,
              result,
              node: nodes,
              line,
              message: messages.expected(types, values, prop, message),
            })
          }
        }
      }
    }
  })
}

rule.primaryOptionArray = true

const declarationStrictValuePlugin = stylelint.createPlugin(ruleName, rule)

export default declarationStrictValuePlugin
export { ruleName, messages }
