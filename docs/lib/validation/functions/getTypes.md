[**stylelint-declaration-strict-value v1.11.1**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getTypes

# Function: getTypes()

> **getTypes**(`config`, `property`): `ExpectedTypes`

Defined in: [lib/validation.ts:286](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/lib/validation.ts#L286)

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
