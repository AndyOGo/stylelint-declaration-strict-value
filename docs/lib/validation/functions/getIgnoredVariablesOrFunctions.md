[**stylelint-declaration-strict-value v1.13.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getIgnoredVariablesOrFunctions

# Function: getIgnoredVariablesOrFunctions()

> **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`, `property`): `boolean`

Defined in: [lib/validation.ts:360](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/1d74c3feff51fb9140e00068eb4137b2bcf791ee/src/lib/validation.ts#L360)

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
