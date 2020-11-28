import type { Node, Root } from 'postcss';

/**
 * A hash of CSS properties to ignore variables or functions.
 */
export interface IIgnoreVariableOrFunctionHash {
  [key: string]: boolean;
}
/**
 * Possible config for `ignoreVariables` and `ignoreFunctions` option.
 */
export type TIgnoreVariableOrFunctionConfig =
  | boolean
  | IIgnoreVariableOrFunctionHash;
/**
 * A Regular Expression string to match a CSS property or value.
 */
export type TRegExpString = string;
/**
 * A CSS value to be ignored.
 */
export type TIgnoreValue = number | string | TRegExpString;
/**
 * A list of CSS values to be ignored.
 */
export type TIgnoreValueList = Array<TIgnoreValue>;
/**
 * A hash of CSS properties with ignored values.
 * - `''` key applies to all configured CSS properties.
 * - key can also be Regular Expression string.
 */
export interface IIgnoreValueHash {
  '': TIgnoreValue | TIgnoreValueList;
  [CSSPropertyName: string]: TIgnoreValue | TIgnoreValueList;
  // [CSSPropertyName: TRegExpString]: TIgnoreValue | TIgnoreValueList;
}
/**
 * @internal
 */
export const isIIgnoreValueHash = (
  key: unknown,
  value: unknown
): key is IIgnoreValueHash =>
  typeof key === 'object' && Object.hasOwnProperty.call(key, value);
/**
 * Possible config for `ignoreValues` and ~~`ignoreKeywords`~~ option.
 */
export type TIgnoreValueConfig =
  | null
  | TIgnoreValue
  | TIgnoreValueList
  | IIgnoreValueHash;
/**
 * Result of CSS value validation.
 */
export interface IDeclarationStrictValueResult {
  /**
   * Whether or not variable is valid.
   */
  validVar: boolean;

  /**
   * Whether or not function is valid.
   */
  validFunc: boolean;

  /**
   * Whether or not keyword is valid.
   */
  validKeyword: boolean;

  /**
   * Whether or not value is valid.
   */
  validValue: boolean;

  /**
   * Longhand CSS Property, if expanded.
   */
  longhandProp?: string;

  /**
   * Longhand CSS value, if expanded.
   */
  longhandValue?: string;
}
/**
 * A autofix function.
 */
export type TAutoFixFunc = (
  node: Node,
  result: IDeclarationStrictValueResult,
  root: Root,
  config: ISecondaryOptions
) => string;
/**
 * Path to autofix function module.
 */
export type TAutoFixModule = string;
/**
 * Possible config for `autoFixFunc` option.
 */
export type TAutoFixFuncConfig =
  | null
  | undefined
  | TAutoFixModule
  | TAutoFixFunc;

/**
 * Plugin secondary options.
 */
export interface ISecondaryOptions {
  /**
   * Whether or not to ignore variables.
   *
   * @defaultValue true
   */
  ignoreVariables?: TIgnoreVariableOrFunctionConfig;

  /**
   * Whether or not to ignore function.
   *
   * @defaultValue true
   */
  ignoreFunctions?: TIgnoreVariableOrFunctionConfig;

  /**
   * An ignored keywords config.
   *
   * @defaultValue null
   * @deprecated use `ignoreValues` option.
   */
  ignoreKeywords?: TIgnoreValueConfig;

  /**
   * An ignored values config.
   *
   * @defaultValue null
   */
  ignoreValues?: TIgnoreValueConfig;

  /**
   * Whether or not to expand shorthand CSS properties.
   *
   * @defaultValue false
   */
  expandShorthand?: boolean;

  /**
   * Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.
   *
   * @defaultValue false
   */
  recurseLonghand?: boolean;

  /**
   * Adjust severity of the rule, `'warning'` or `'error'` (default).
   *
   * @defaultValue 'error'
   */
  severity?: string;

  /**
   * A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.
   *
   * @defaultValue undefined
   */
  message?: string;

  /**
   * Don't auto-fix if `--fix` option is applied.
   *
   * @defaultValue false
   */
  disableFix?: boolean;

  /**
   * By default no auto-fix feature.
   *
   * @defaultValue null
   */
  autoFixFunc?: TAutoFixFuncConfig;
}

const defaults: ISecondaryOptions = {
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
};

export default defaults;
