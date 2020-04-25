import path from 'path'

import defaults from '../defaults'

/**
 * Check if type is either `number` or `string`.
 *
 * @param {*} value - Any value.
 *
 * @returns {boolean} - Returns `true` if `value`'s type is either `number` or `string`, else `false`.
 */
function isNumberOrString(value) {
  const type = typeof value

  return type === 'string' || type === 'number'
}

/**
 * Validate primary options of stylelint plugin config.
 *
 * @param {string|string[]} actual - The actual config to validate.
 *
 * @returns {boolean} - Returns `true` if primary options are valied, else `false`.
 */
function validProperties(actual) {
  return isNumberOrString(actual)
    || (Array.isArray(actual) && actual.every((item) => isNumberOrString(item)))
}

/**
 * Validate optional secondary options of stylelint plugin config.
 *
 * @param {SecondaryOptions} actual - The actual config to validate.
 *
 * @returns {boolean} - Returns `true` if secondary options are valied, else `false`.
 */
function validOptions(actual) {
  if (typeof actual !== 'object') return false

  const allowedKeys = Object.keys(defaults)
  if (!Object.keys(actual).every((key) => allowedKeys.indexOf(key) > -1)) return false

  if ('ignoreVariables' in actual
    && typeof actual.ignoreVariables !== 'boolean'
    && actual.ignoreVariables !== null) return false

  if ('ignoreFunctions' in actual
    && typeof actual.ignoreFunctions !== 'boolean'
    && actual.ignoreFunctions !== null) return false

  if ('severity' in actual
    && typeof actual.severity !== 'string'
    && actual.severity !== null) return false

  if ('ignoreKeywords' in actual
    && !validProperties(actual.ignoreKeywords)
    && !validHash(actual.ignoreKeywords)) return false

  if ('ignoreValues' in actual
    && !validProperties(actual.ignoreValues)
    && !validHash(actual.ignoreValues)) return false

  if ('message' in actual
    && typeof actual.message !== 'string'
    && actual.message !== null) return false

  if ('disableFix' in actual
    && typeof actual.disableFix !== 'boolean'
    && actual.disableFix !== null) return false

  if ('autoFixFunc' in actual
    && typeof actual.autoFixFunc !== 'function'
    && typeof actual.autoFixFunc !== 'string'
    && actual.autoFixFunc !== null) return false

  return true
}

/**
 * Validate optional hash keyword config.
 *
 * @param {object} actual - A keyword config.
 *
 * @returns {boolean} - Returns `true` if hash keyword config is valid, else `false`.
 */
function validHash(actual) {
  if (typeof actual !== 'object') return false

  return Object.keys(actual).every((key) => validProperties(actual[key]))
}

/**
 * Build expected message for stylelint report.
 *
 * @param {Array} types - Either `variable`, `function` and/or `keyword`.
 * @param {string} value - The CSS declaration's value.
 * @param {string} property - The CSS declaration's property.
 * @param {string} [customMessage] - A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`.
 *
 * @returns {string} - Returns an expected message for stylelint report.
 */
function expected(types, value, property, customMessage) {
  if (Array.isArray(types)) {
    const typesLast = types.pop()

    // eslint-disable-next-line no-param-reassign
    types = types.length ? `${types.join(', ')} or ${typesLast}` : typesLast
  }

  if (typeof customMessage === 'string' && customMessage.length) {
    /* eslint-disable no-template-curly-in-string */
    return customMessage.replace('${types}', types)
      .replace('${value}', value)
      .replace('${property}', property)
    /* eslint-enable no-template-curly-in-string */
  }

  return `Expected ${types} for "${value}" of "${property}"`
}

/**
 * Get configured types for stylelint report message.
 *
 * @param {object} config - The secondary stylelint-plugin config.
 * @param {string} property - The specific CSS declaration's property of the current iteration.
 *
 * @returns {Array} - Returns a list of configured types.
 */
function getTypes(config, property) {
  const {
    ignoreVariables,
    ignoreFunctions,
    ignoreKeywords,
    ignoreValues,
  } = config
  const types = []

  if (ignoreVariables) {
    types.push('variable')
  }

  if (ignoreFunctions) {
    types.push('function')
  }

  if (ignoreKeywords && getIgnoredKeywords(ignoreKeywords, property)) {
    types.push('keyword')
  }

  if (ignoreValues && getIgnoredValues(ignoreValues, property)) {
    types.push('keyword')
  }

  return types
}

/**
 * Get the correct ignored keywords for a specific CSS declaration's property
 * out of a complex `ignoreKeywords` config hash or array.
 *
 * @param {null|object|Array|string} ignoreKeywords - The keyword/-s to ignore.
 * @param {string} property - The specific CSS declaration's property of the current iteration.
 *
 * @returns {Array} - Returns ignored keywords for a specific CSS property.
 */
function getIgnoredKeywords(ignoreKeywords, property) {
  if (!ignoreKeywords) return null

  let keywords = ignoreKeywords

  if ({}.hasOwnProperty.call(keywords, property)) {
    keywords = keywords[property]
  } else if ({}.hasOwnProperty.call(keywords, '')) {
    keywords = keywords['']
  }

  return Array.isArray(keywords) ? keywords : [keywords]
}

/**
 * Get the correct ignored values for a specific CSS declaration's property
 * out of a complex `ignoreValues` config hash or array.
 *
 * @param {null|string|RegExp|object|Array} ignoreValues - The values/-s to ignore.
 * @param {string} property - The specific CSS declaration's property of the current iteration.
 * @returns {Array} - Returns ignored values for a specific CSS property.
 */
function getIgnoredValues(ignoreValues, property) {
  if (!ignoreValues) return null

  let values = ignoreValues

  if ({}.hasOwnProperty.call(values, property)) {
    values = values[property]
  } else if ({}.hasOwnProperty.call(values, '')) {
    values = values['']
  }

  return Array.isArray(values) ? values : [values]
}

/**
 * Get the auto-fix function either by a function directly or from source file.
 *
 * @param {Function|string} autoFixFunc - A JavaScript function or a module path to resolve it, also from cwd.
 *
 * @returns {Function|null} - Returns the auto-fix function if found, else `null`.
 */
function getAutoFixFunc(autoFixFunc) {
  const type = typeof autoFixFunc

  if (type === 'function') {
    return autoFixFunc
  }

  if (type === 'string') {
    let resolveAutoFixfunc

    try {
      resolveAutoFixfunc = require.resolve(autoFixFunc)
    } catch (error) {
      resolveAutoFixfunc = require.resolve(path.join(process.cwd(), autoFixFunc))
    }

    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(resolveAutoFixfunc)
  }

  return null
}

export {
  validProperties,
  validOptions,
  expected,
  getTypes,
  getIgnoredKeywords,
  getIgnoredValues,
  getAutoFixFunc,
}
