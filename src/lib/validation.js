import defaults from '../defaults'

/**
 * Validate primary options of stylelint plugin config.
 *
 * @param {string|string[]} actual - The actual config to validate.
 *
 * @returns {boolean}
 */
function validProperties(actual) {
  return typeof actual === 'string' ||
    (Array.isArray(actual) && actual.every(item => typeof item === 'string'))
}

/**
 * Validate optional secondary options of stylelint plugin config.
 *
 * @param {Object} actual - The actual config to validate.
 * @param {boolean} [actual.ignoreVariables=true] - Whether or not to lint variables.
 * @param {boolean} [actual.ignoreFunctions=true] - Whether or not to lint functions.
 * @param {string} [actual.severity='error'] - What the severity level is for this rule.
 * @param {string|Array|Object} [actual.ignoreKeywords=null] - A keywords config.
 *
 * @returns {boolean}
 */
function validOptions(actual) {
  if (typeof actual !== 'object') return false

  const allowedKeys = Object.keys(defaults)
  if (!Object.keys(actual).every(key => allowedKeys.indexOf(key) > -1)) return false

  if ('ignoreVariables' in actual &&
    typeof actual.ignoreVariables !== 'boolean' &&
    actual.ignoreVariables !== null) return false

  if ('ignoreFunctions' in actual &&
    typeof actual.ignoreFunctions !== 'boolean' &&
    actual.ignoreFunctions !== null) return false

  if ('severity' in actual &&
    typeof actual.severity !== 'string' &&
    actual.severity !== null) return false

  if ('ignoreKeywords' in actual &&
    !validProperties(actual.ignoreKeywords) &&
    !validHash(actual.ignoreKeywords)) return false

  return true
}

/**
 * Validate optional hash keyword config.
 *
 * @param {string|Array} actual - A keyword config.
 *
 * @returns {boolean}
 */
function validHash(actual) {
  if (typeof actual !== 'object') return false

  return Object.keys(actual).every(key => validProperties(actual[key]))
}

/**
 * Build expected message for stylelint report.
 *
 * @param {Array} types - Either `variable`, `function` and/or `keyword`.
 * @param {string} value - The CSS declaration's value.
 * @param {string} property - The CSS declaration's property.
 * @returns {string}
 */
function expected(types, value, property) {
  if (Array.isArray(types)) {
    const typesLast = types.pop()

    // eslint-disable-next-line no-param-reassign
    types = types.length ? `${types.join(', ')} or ${typesLast}` : typesLast
  }

  return `Expected ${types} for "${value}" of "${property}"`
}

/**
 * Get configured types for stylelint report message.
 *
 * @param {Object} config - The secondary stylelint-plugin config.
 * @param {string} property - The specific CSS declaration's property of the current iteration.
 * @returns {Array}
 */
function getTypes(config, property) {
  const { ignoreVariables, ignoreFunctions, ignoreKeywords } = config
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

  return types
}

/**
 * Get the correct ignored keywords for an specific CSS declaration's property
 * out of a complex ignoreKeywords config hash or array.
 *
 * @param {Object|Array|string} ignoreKeywords - The keyword/-s to ignore.
 * @param {Array} property - The specific CSS declaration's property of the current iteration.
 * @returns {Array}
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

export {
  validProperties,
  validOptions,
  expected,
  getTypes,
  getIgnoredKeywords,
}
