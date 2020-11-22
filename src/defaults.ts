import type { Node, Root } from 'postcss';

/**
 * Plugin secondary options.
 *
 * @typedef {object} SecondaryOptions
 * @property {boolean|Object.<string, boolean>} [ignoreVariables=true] - Wheter or not to ignore variables.
 * @property {boolean|Object.<string, boolean>} [ignoreFunctions=true] - Wheter or not to ignore function.
 * @property {null|number|string|Array|object} [ignoreKeywords=null] - **DEPRECATED:** An ignored keywords config.
 * @property {null|number|string|RegExp|Array|object} [ignoreValues=null] - An ignored values config.
 * @property {boolean} [expandShorthand=false] - Wheter or not to expand shorthand CSS properties.
 * @property {boolean} [recurseLonghand=false] - Wheter or not to expand longhand CSS properties recursivly - this is only useful for the border property.
 * @property {string} [severity='error'] - Adjust severity of the rule, `'warning'` or `'error'` (default).
 * @property {undefined|string} [message=undefined] - A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.
 * @property {boolean} [disableFix=false] - Don't auto-fix if `--fix` option is applied.
 * @property {null|Function|string} [autoFixFunc=null] - By default no auto-fix feature.
 */
export interface IBoolHash {
  [key: string]: boolean;
}
export type IBoolOption = boolean | IBoolHash;
export type TOptionPrimitive = number | string;
export type TOptionArray = Array<TOptionPrimitive>;
export interface IOptionHash {
  [key: string]: TOptionPrimitive | TOptionArray;
}
export const isIOptionHash = (
  key: unknown,
  value: unknown
): key is IOptionHash =>
  typeof key === 'object' && Object.hasOwnProperty.call(key, value);
export type TOption = TOptionPrimitive | TOptionArray | IOptionHash;
export interface IResult {
  validVar: boolean;
  validFunc: boolean;
  validKeyword: boolean;
  validValue: boolean;
  longhandProp?: string;
  longhandValue?: string;
}
export type TAutoFixFunc = (
  node: Node,
  result: IResult,
  root: Root,
  config: ISecondaryOptions
) => string;
export type TAutoFixFuncOrPath = null | undefined | string | TAutoFixFunc;
export interface ISecondaryOptions {
  ignoreVariables?: IBoolOption;
  ignoreFunctions?: IBoolOption;
  ignoreKeywords?: null | TOption;
  ignoreValues?: null | TOption;
  expandShorthand?: boolean;
  recurseLonghand?: boolean;
  severity?: string;
  message?: string;
  disableFix?: boolean;
  autoFixFunc?: TAutoFixFuncOrPath;
}

/**
 * Default options.
 *
 * @constant {SecondaryOptions}
 * @property {boolean} [ignoreVariables=true] - Ignore variables by default.
 * @property {boolean} [ignoreFunctions=true] - Ignore function by default.
 * @property {null} [ignoreKeywords=null] - **DEPRECATED:** Forbid keywords by default.
 * @property {null} [ignoreValues=null] - Forbid values by default.
 * @property {boolean} [expandShorthand=false] - Expand shorthand CSS properties.
 * @property {boolean} [recurseLonghand=false] - Do not expand longhand properties recursivly - only useful for `border`.
 * @property {string} [severity='error'] - This rule's default severity is `'error'`.
 * @property {undefined} [message=undefined] - Use default message.
 * @property {boolean} [disableFix=false] - Don't auto-fix if `--fix` option is applied.
 * @property {null} [autoFixFunc=null] - By default no auto-fix feature.
 * @default
 */
const defaults = {
  ignoreVariables: true,
  ignoreFunctions: true,
  ignoreKeywords: null,
  ignoreValues: null,
  expandShorthand: false,
  recurseLonghand: false,
  severity: 'error',
  message: undefined,
  disableFix: false,
  autoFixFunc: null,
} as ISecondaryOptions;

export default defaults;
