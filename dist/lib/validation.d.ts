import { SecondaryOptions, IgnoreValue, IgnoreValueList, IgnoreVariableOrFunctionConfig, IgnoreValueConfig, AutoFixFunc, AutoFixFuncConfig } from '../defaults';
/**
 * Validate primary options of stylelint plugin config.
 *
 * @internal
 * @param actual - The actual config to validate.
 *
 * @returns Returns `true` if primary options are valid, else `false`.
 */
export declare function validProperties(actual: unknown): actual is IgnoreValue | IgnoreValueList;
/**
 * Validate optional secondary options of stylelint plugin config.
 *
 * @internal
 * @param actual - The actual config to validate.
 *
 * @returns Returns `true` if secondary options are valid, else `false`.
 */
export declare function validOptions(actual: SecondaryOptions): boolean;
/**
 * Expected type of CSS value, available by configuration.
 * @internal
 */
declare type ExpectedType = 'variable' | 'function' | 'keyword';
/**
 * Expected types of CSS value, as configured.
 * @internal
 */
declare type ExpectedTypes = Array<ExpectedType>;
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
export declare function expected(types: ExpectedType | ExpectedTypes, value: string, property: string, customMessage?: string): string;
/**
 * Get configured types for stylelint report message.
 *
 * @internal
 * @param config - The secondary stylelint-plugin config.
 * @param property - The specific CSS declaration's property of the current iteration.
 *
 * @returns Returns a list of configured types.
 */
export declare function getTypes(config: SecondaryOptions, property: string): ExpectedTypes;
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
export declare function getIgnoredVariablesOrFunctions(ignoreVariablesOrFunctions: IgnoreVariableOrFunctionConfig, property: string): boolean;
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
export declare function getIgnoredKeywords(ignoreKeywords: IgnoreValueConfig, property: string): null | IgnoreValueList;
/**
 * Get the correct ignored values for a specific CSS declaration's property
 * out of a complex `ignoreValues` config hash or array.
 *
 * @internal
 * @param ignoreValues - The values/-s to ignore.
 * @param property - The specific CSS declaration's property of the current iteration.
 * @returns Returns ignored values for a specific CSS property, or `null`.
 */
export declare function getIgnoredValues(ignoreValues: IgnoreValueConfig, property: string): null | IgnoreValueList;
/**
 * Get the auto-fix function either by a function directly or from a source file.
 *
 * @internal
 * @param autoFixFunc - A JavaScript function or a module path to resolve it, also from `cwd`.
 *
 * @returns Returns the auto-fix function if found, else `null`.
 */
export declare function getAutoFixFunc(autoFixFunc: AutoFixFuncConfig, disableFix?: boolean, contextFix?: boolean): null | AutoFixFunc;
export {};
