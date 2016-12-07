import stylelint from 'stylelint'

const ruleName = 'scale-unlimited/declaration-strict-value'
const utils = stylelint.utils
const messages = utils.ruleMessages(ruleName, {
  expected: (type, property, value) => {
    if (Array.isArray(type)) {
      const typeLast = type.pop();

      type = type.length ? `${type.join(', ')} or ${typeLast}` : typeLast
    }

    return `Expected ${type} for ${value} of ${property}.`
  }
})
const reVar = /^(?:@.+|\$.+|var\(--.+\))$/
const reFunc = /^.+\(.+\)$/
const defaults = {
  ignoreFunctions: true,
  ignoreKeywords: null,
}

const getIgnoredKeywords = (irgnoreKeywords, property) => {
  if (!ignoreKeywords) return null

  return irgnoreKeywords[property] || irgnoreKeywords[''] || irgnoreKeywords
}

const rule = (properties, options) =>
  (root, result) => {
    const validOptions = utils.validateOptions(
      result,
      ruleName,
      {
        actual: properties,
        possible: [],
      },
      {
        actual: options,
        possible: {
          ignoreFunctions: [true, null],
          ignoreKeywords: [[], null]
        },
        optional: true,
      }
    );

    if (!validOptions) return

    if (!Array.isArray(properties)) {
      properties = [properties]
    }

    const { ignoreKeywords, ignoreFunctions } = {
      ...defaults,
      ...options
    }
    let reKeywords = ignoreKeywords ? {} : null

    properties.forEach((property) => {
      let propFilter = property

      if (propFilter.charAt(0) === '/' && propFilter.slice(-1) === '/') {
        propFilter = new RegExp(propFilter.slice(1, -1))
      }

      root.walkDecls(propFilter, declsWalker)
    })

    function declsWalker(node) {
      const { value, prop } = node
      const validVar = reVar.test(value)
      let validFunc = true
      let validKeyword = true

      if (ignoreFunctions && !validVar) {
        validFunc = reFunc.test(value)
      }

      if (ignoreKeywords && !validVar || !validFunc) {
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

      if (!validVar || !validFunc || !validKeyword) {
        let type = ['variable']

        if (ignoreFunctions) {
          type.push('function')
        }

        if (ignoreKeywords && getIgnoredKeywords(ignoreKeywords, property)) {
          type.push('keyword')
        }

        utils.report({
          ruleName,
          result,
          node,
          message: messages.expected(types, value, prop)
        })
      }
    }
  }

rule.primaryOptionArray = true

const declarationStrictValuePlugin = stylelint.createPlugin(ruleName, rule)

export default declarationStrictValuePlugin
export { ruleName, messages }
