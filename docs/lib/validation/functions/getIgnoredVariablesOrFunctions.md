[**stylelint-declaration-strict-value v1.11.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getIgnoredVariablesOrFunctions

# Function: getIgnoredVariablesOrFunctions()

> **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`, `property`): `boolean`

Defined in: [lib/validation.ts:327](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/d6ba666a8a77ad8121a2568c6cf2fa2b2d1d3d4f/src/lib/validation.ts#L327)

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
