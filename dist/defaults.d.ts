import type { Node, Root } from 'postcss';
export interface IBoolHash {
    [key: string]: boolean;
}
export declare type IBoolOption = boolean | IBoolHash;
export declare type TOptionPrimitive = number | string;
export declare type TOptionArray = Array<TOptionPrimitive>;
export interface IOptionHash {
    [key: string]: TOptionPrimitive | TOptionArray;
}
export declare const isIOptionHash: (key: unknown, value: unknown) => key is IOptionHash;
export declare type TOption = TOptionPrimitive | TOptionArray | IOptionHash;
export interface IResult {
    validVar: boolean;
    validFunc: boolean;
    validKeyword: boolean;
    validValue: boolean;
    longhandProp?: string;
    longhandValue?: string;
}
export declare type TAutoFixFunc = (node: Node, result: IResult, root: Root, config: ISecondaryOptions) => string;
export declare type TAutoFixFuncOrPath = null | undefined | string | TAutoFixFunc;
/**
 * Plugin secondary options.
 *
 * @internal
 */
export interface ISecondaryOptions {
    /**
     * Wheter or not to ignore variables.
     *
     * @defaultValue true
     */
    ignoreVariables?: IBoolOption;
    /**
     * Wheter or not to ignore function.
     *
     * @defaultValue true
     */
    ignoreFunctions?: IBoolOption;
    /**
     * An ignored keywords config.
     *
     * @defaultValue null
     * @deprecated use `ignoreValues` option.
     */
    ignoreKeywords?: null | TOption;
    /**
     * An ignored values config.
     *
     * @defaultValue null
     */
    ignoreValues?: null | TOption;
    /**
     * Wheter or not to expand shorthand CSS properties.
     *
     * @defaultValue false
     */
    expandShorthand?: boolean;
    /**
     * Wheter or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.
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
    autoFixFunc?: TAutoFixFuncOrPath;
}
declare const defaults: ISecondaryOptions;
export default defaults;
