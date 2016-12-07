function validProperties(actual) {
  return typeof actual === 'string' ||
    (Array.isArray(actual) && actual.every(item => typeof item === 'string'))
}

function validOptions(actual) {
  if (typeof actual !== 'object') return false

  const allowedKeys = Object.keys(defaults)
  if (!Object.keys(actual).every(key => allowedKeys.indexOf(key) > -1)) return false

  if ('ignoreFunctions' in actual &&
    typeof actual.ignoreFunctions !== 'boolean' &&
    actual.ignoreFunctions !== null) return false

  if ('ignoreKeywords' in actual &&
    !validProperties(actual.ignoreKeywords) &&
    !validHash(actual.ignoreKeywords)) return false

  return true
}

function validHash(actual) {
  if (typeof actual !== 'object') return false

  return Object.keys(actual).every(key => validProperties(actual[key]))
}

function expected(types, value, property) {
  if (Array.isArray(types)) {
    const typesLast = types.pop()

    types = types.length ? `${types.join(', ')} or ${typesLast}` : typesLast
  }

  return `Expected ${types} for "${value}" of "${property}"`
}

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

function getIgnoredKeywords(ignoreKeywords, property) {
  if (!ignoreKeywords) return null

  const keywords = ignoreKeywords[property] || ignoreKeywords[''] || ignoreKeywords

  return Array.isArray(keywords) ? keywords : [keywords]
}

export {
  validProperties,
  validOptions,
  expected,
  getTypes,
  getIgnoredKeywords,
}
