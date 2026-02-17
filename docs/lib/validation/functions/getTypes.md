[**stylelint-declaration-strict-value v1.11.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getTypes

# Function: getTypes()

> **getTypes**(`config`, `property`): `ExpectedTypes`

Defined in: [lib/validation.ts:286](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/d6ba666a8a77ad8121a2568c6cf2fa2b2d1d3d4f/src/lib/validation.ts#L286)

**`Internal`**

Get configured types for stylelint report message.

## Parameters

### config

[`SecondaryOptions`](../../../defaults/interfaces/SecondaryOptions.md)

The secondary stylelint-plugin config.

### property

`string`

The specific CSS declaration's property of the current iteration.

## Returns

`ExpectedTypes`

Returns a list of configured types.
