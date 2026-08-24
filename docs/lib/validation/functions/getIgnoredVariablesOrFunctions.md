[**stylelint-declaration-strict-value v1.12.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getIgnoredVariablesOrFunctions

# Function: getIgnoredVariablesOrFunctions()

> **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`, `property`): `boolean`

Defined in: [lib/validation.ts:360](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/lib/validation.ts#L360)

**`Internal`**

Get the correct ignored variable or function for a specific CSS declaration's property
out of a complex `ignoreVariablesOrFunctions` config hash or boolean.

## Parameters

### ignoreVariablesOrFunctions

[`IgnoreVariableOrFunctionConfig`](../../../defaults/type-aliases/IgnoreVariableOrFunctionConfig.md)

The variables or functions to ignore.

### property

`string`

The specific CSS declaration's property of the current iteration.

## Returns

`boolean`

Returns ignored variable or function for a specific CSS property.
