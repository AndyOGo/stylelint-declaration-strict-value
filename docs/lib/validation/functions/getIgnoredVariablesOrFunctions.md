[**stylelint-declaration-strict-value v1.12.1**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getIgnoredVariablesOrFunctions

# Function: getIgnoredVariablesOrFunctions()

> **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`, `property`): `boolean`

Defined in: [lib/validation.ts:360](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/lib/validation.ts#L360)

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
