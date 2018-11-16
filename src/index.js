import stylelint from 'stylelint'
import valuesParser from 'postcss-values-parser'

import {
  reFunc, reSkipProp, reVar, validProperties, validOptions, expected, getTypes, getIgnoredKeywords, getAutoFixFunc,
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
  const ignoreNested = isComplexIgnoreFunctions ? ignoreFunctions.ignoreNested : ignoreFunctions
  const ignoreNumberArgs = isComplexIgnoreFunctions ? ignoreFunctions.ignoreNumbers : ignoreFunctions
  const ignoreColorArgs = isComplexIgnoreFunctions ? ignoreFunctions.ignoreColors : ignoreFunctions
  const ignoreOperatorsInArgs = isComplexIgnoreFunctions ? ignoreFunctions.ignoreOperators : ignoreFunctions
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

      const valueAst = valuesParser(values, {
        loose,
      }).parse()

      valueAst.first.walk(lintDeclStrictValue)

      function lintDeclStrictValue(node) {
        // important prevent walk of children by returning false
        if (node.parent.skipChildren) return false

        const { type, value, parent } = getNode(node)
        const isParentFunc = parent.type === 'func'
        // falsify everything by default
        let validVar = false
        let validFunc = false
        let validKeyword = false

        // skip root, comma and paren nodes
        if (type === 'root' || type === 'comment' || type === 'comma' || type === 'paren') return
        console.log(`${type} -> ${value} : ${node.toString()}`)
        // test variable
        if (ignoreVariables) {
          validVar = type === 'var'
        }

        // test function
        if (ignoreFunctions && !validVar && type === 'func') {
          if (isParentFunc && ignoreNested) {
            validFunc = true
          } else {
            validFunc = true
          }
        }

        if (type === 'number') {
          if (isParentFunc && ignoreNumberArgs) {
            return
          } else if (!isParentFunc && ignoreNumbers) {
            return
          }
        }

        if (type === 'word') {
          const isColor = node.isColor || node.isHex

          console.log(isParentFunc, ignoreColors, isColor)
          if (isParentFunc && ignoreColorArgs && isColor) {
            return
          } else if (!isParentFunc && ignoreColors && isColor) {
            return
          }
        }

        if (type === 'operator') {
          if (isParentFunc && ignoreOperatorsInArgs) {
            return
          } else if (!isParentFunc && ignoreOperators) {
            return
          }
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
            console.log(value, node.toString())
            validKeyword = reKeyword.test(node.toString())
          }
        }

        // report only if all failed
        if (!validVar && !validFunc && !validKeyword) {
          const types = getTypes(config, property)
          const { raws } = nodes
          const { start } = nodes.source

          // support auto fixing
          if (context.fix && !disableFix) {
            const fixedValue = autoFixFuncNormalized(node, nodes, { validVar, validFunc, validKeyword }, root, config)

            // apply fixed value if returned
            if (fixedValue) {
              // eslint-disable-next-line no-param-reassign
              node.value = fixedValue
            }
          } else {
            const { line } = start
            const column = start.column + prop.length + raws.between.length

            console.log({ validVar, validFunc, validKeyword })
            console.log(line, column)
            console.log(config)
            utils.report({
              ruleName,
              result,
              nodes,
              line,
              column,
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
