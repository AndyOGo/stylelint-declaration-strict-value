[**stylelint-declaration-strict-value v1.12.1**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getTypes

# Function: getTypes()

> **getTypes**(`config`, `property`): `ExpectedTypes`

Defined in: [lib/validation.ts:319](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/lib/validation.ts#L319)

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
