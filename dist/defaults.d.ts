import type { Node, Root } from 'stylelint/node_modules/postcss';
/**
 * Rule Name.
 */
export declare const ruleName = "scale-unlimited/declaration-strict-value";
/**
 * A hash of CSS properties to ignore variables or functions.
 */
export interface IgnoreVariableOrFunctionHash {
    [key: string]: boolean;
}
/**
 * Possible config for `ignoreVariables` and `ignoreFunctions` option.
 */
export declare type IgnoreVariableOrFunctionConfig = boolean | IgnoreVariableOrFunctionHash;
/**
 * A Regular Expression string to match a CSS property or value.
 */
export declare type RegExpString = string;
/**
 * A CSS value to be ignored.
 */
export declare type IgnoreValue = number | string | RegExpString;
/**
 * A list of CSS values to be ignored.
 */
export declare type IgnoreValueList = Array<IgnoreValue>;
/**
 * A hash of CSS properties with ignored values.
 * - `''` key applies to all configured CSS properties.
 * - key can also be a Regular Expression string.
 */
export interface IgnoreValueHash {
    '': IgnoreValue | IgnoreValueList;
    [CSSPropertyName: string]: IgnoreValue | IgnoreValueList;
}
/**
 * @internal
 */
export declare const isIIgnoreValueHash: (key: unknown, value: unknown) => key is IgnoreValueHash;
/**
 * Possible config for `ignoreValues` and ~~`ignoreKeywords`~~ option.
 */
export declare type IgnoreValueConfig = null | IgnoreValue | IgnoreValueList | IgnoreValueHash;
/**
 * Result of CSS value validation.
 */
export interface DeclarationStrictValueResult {
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
export declare type AutoFixFunc = (node: Node, result: DeclarationStrictValueResult, root: Root, config: SecondaryOptions) => string;
/**
 * Path to autofix function module.
 */
export declare type AutoFixModule = string;
/**
 * Possible config for `autoFixFunc` option.
 */
export declare type AutoFixFuncConfig = null | undefined | AutoFixModule | AutoFixFunc;
/**
 * Plugin secondary options.
 */
export interface SecondaryOptions {
    /**
     * Whether or not to ignore variables.
     *
     * @defaultValue true
     */
    ignoreVariables?: IgnoreVariableOrFunctionConfig;
    /**
     * Whether or not to ignore function.
     *
     * @defaultValue true
     */
    ignoreFunctions?: IgnoreVariableOrFunctionConfig;
    /**
     * An ignored keywords config.
     *
     * @defaultValue null
     * @deprecated use `ignoreValues` option.
     */
    ignoreKeywords?: IgnoreValueConfig;
    /**
     * An ignored values config.
     *
     * @defaultValue null
     */
    ignoreValues?: IgnoreValueConfig;
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
    autoFixFunc?: AutoFixFuncConfig;
}
declare const defaults: SecondaryOptions;
export default defaults;
