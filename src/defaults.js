/**
 * Plugin secondary options.
 *
 * @typedef {object} SecondaryOptions
 * @property {boolean} [ignoreVariables=true] - Wheter or not to ignore variables.
 * @property {boolean} [ignoreFunctions=true] - Wheter or not to ignore function.
 * @property {null|number|string|Array|object} [ignoreKeywords=null] - **DEPRECATED:** A ignored keywords config.
 * @param {number|string|RegExp|Array|object} [ignoreValues=null] - A ignored values config.
 * @property {string} [severity='error'] - Adjust severity of the rule, `'warning'` or `'error'` (default).
 * @property {null|string} [message=null] - A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.
 * @property {boolean} [disableFix=false] - Don't auto-fix if `--fix` option is applied.
 * @property {null|Function} [autoFixFunc=null] - By default no auto-fix feature.
 */

/**
 * Default options.
 *
 * @constant {SecondaryOptions}
 * @property {boolean} [ignoreVariables=true] - Ignore variables by default.
 * @property {boolean} [ignoreFunctions=true] - Ignore function by default.
 * @property {null} [ignoreKeywords=null] - **DEPRECATED:** Forbid keywords by default.
 * @property {null} [ignoreValues=null] - Forbid values by default.
 * @property {string} [severity='error'] - This rule's default severity is `'error'`.
 * @property {null} [message=null] - Use default message.
 * @property {null} [disableFix=false] - Don't auto-fix if `--fix` option is applied.
 * @property {null} [autoFixFunc=null] - By default no auto-fix feature.
 * @default
 */
const defaults = {
  ignoreVariables: true,
  ignoreFunctions: true,
  ignoreKeywords: null,
  ignoreValues: null,
  severity: 'error',
  message: null,
  disableFix: false,
  autoFixFunc: null,
}

export default defaults
