[**stylelint-declaration-strict-value v1.13.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getTypes

# Function: getTypes()

> **getTypes**(`config`, `property`): `ExpectedTypes`

Defined in: [lib/validation.ts:319](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/1d74c3feff51fb9140e00068eb4137b2bcf791ee/src/lib/validation.ts#L319)

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
