/**
 * Plugin secondary options.
 *
 * @typedef {object} SecondaryOptions
 * @property {boolean} [ignoreVariables=true] - Wheter or not to ignore variables.
 * @property {boolean} [ignoreFunctions=true] - Wheter or not to ignore function.
 * @property {null|number|string|Array|object} [ignoreKeywords=true] - Wheter or not to ignore function.
 * @property {string} [severity='error'] - Adjust severity of the rule, `'warning'` or `'error'` (default).
 * @property {null|string} [message=null] - A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.
 * @property {boolean} [disableFix=false] - Don't auto-fix if `--fix` option is applied.
 * @property {null|Function} [autoFixFunc=null] - By default no auto-fix feature.
 */

/**
 * Default options.
 *
 * @constant {SecondaryOptions}
 * @property {boolean} ignoreVariables - Ignore variables by default.
 * @property {boolean} ignoreFunctions - Ignore function by default.
 * @property {null} ignoreKeywords - Forbid keywords by default.
 * @property {string} severity - This rule's default severity is `'error'`.
 * @property {null} message - Use default message.
 * @property {null} disableFix - Don't auto-fix if `--fix` option is applied.
 * @property {null} autoFixFunc - By default no auto-fix feature.
 * @default
 */
const defaults = {
  ignoreVariables: true,
  ignoreFunctions: true,
  ignoreKeywords: null,
  severity: 'error',
  message: null,
  disableFix: false,
  autoFixFunc: null,
}

export default defaults
