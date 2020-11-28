import { ISecondaryOptions, TOptionPrimitive, TOptionArray, IBoolOption, TOption, TAutoFixFunc, TAutoFixFuncOrPath } from '../defaults';
/**
 * Validate primary options of stylelint plugin config.
 *
 * @internal
 * @param actual - The actual config to validate.
 *
 * @returns Returns `true` if primary options are valid, else `false`.
 */
export declare function validProperties(actual: unknown): actual is TOptionPrimitive | TOptionArray;
/**
 * Validate optional secondary options of stylelint plugin config.
 *
 * @internal
 * @param actual - The actual config to validate.
 *
 * @returns Returns `true` if secondary options are valied, else `false`.
 */
export declare function validOptions(actual: ISecondaryOptions): boolean;
declare type TExpectedType = 'variable' | 'function' | 'keyword';
declare type TExpectedTypes = Array<TExpectedType>;
/**
 * Build expected message for stylelint report.
 *
 * @internal
 * @param types - Either `variable`, `function` and/or `keyword`.
 * @param value - The CSS declaration's value.
 * @param property - The CSS declaration's property.
 * @param customMessage - A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`.
 *
 * @returns Returns an expected message for stylelint report.
 */
export declare function expected(types: TExpectedType | TExpectedTypes, value: string, property: string, customMessage?: string): string;
/**
 * Get configured types for stylelint report message.
 *
 * @internal
 * @param config - The secondary stylelint-plugin config.
 * @param property - The specific CSS declaration's property of the current iteration.
 *
 * @returns Returns a list of configured types.
 */
export declare function getTypes(config: ISecondaryOptions, property: string): TExpectedTypes;
/**
 * Get the correct ignored variable or function for a specific CSS declaration's property
 * out of a complex `ignoreVariablesOrFunctions` config hash or boolean.
 *
 * @internal
 * @param ignoreVariablesOrFunctions - The variables or functions to ignore.
 * @param property - The specific CSS declaration's property of the current iteration.
 *
 * @returns Returns ignored variable or function for a specific CSS property.
 */
export declare function getIgnoredVariablesOrFunctions(ignoreVariablesOrFunctions: IBoolOption, property: string): boolean;
/**
 * Get the correct ignored keywords for a specific CSS declaration's property
 * out of a complex `ignoreKeywords` config hash or array.
 *
 * @internal
 * @param ignoreKeywords - The keyword/-s to ignore.
 * @param property - The specific CSS declaration's property of the current iteration.
 *
 * @returns Returns ignored keywords for a specific CSS property, or `null`.
 */
export declare function getIgnoredKeywords(ignoreKeywords: TOption, property: string): null | TOptionArray;
/**
 * Get the correct ignored values for a specific CSS declaration's property
 * out of a complex `ignoreValues` config hash or array.
 *
 * @internal
 * @param ignoreValues - The values/-s to ignore.
 * @param property - The specific CSS declaration's property of the current iteration.
 * @returns Returns ignored values for a specific CSS property, or `null`.
 */
export declare function getIgnoredValues(ignoreValues: TOption, property: string): null | TOptionArray;
/**
 * Get the auto-fix function either by a function directly or from source file.
 *
 * @internal
 * @param autoFixFunc - A JavaScript function or a module path to resolve it, also from cwd.
 *
 * @returns Returns the auto-fix function if found, else `null`.
 */
export declare function getAutoFixFunc(autoFixFunc: TAutoFixFuncOrPath): null | TAutoFixFunc;
export {};
