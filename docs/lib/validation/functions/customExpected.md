[**stylelint-declaration-strict-value v1.11.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / customExpected

# Function: customExpected()

> **customExpected**(`typesMessage`, `value`, `property`, `customMessage`): `string`

Defined in: [lib/validation.ts:241](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/d6ba666a8a77ad8121a2568c6cf2fa2b2d1d3d4f/src/lib/validation.ts#L241)

**`Internal`**

Build custom expected message for stylelint report.

## Parameters

### typesMessage

`string`

An expected types message for stylelint report.

### value

`string`

The CSS declaration's value.

### property

`string`

The CSS declaration's property.

### customMessage

`string`

A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`.

## Returns

`string`

Returns a custom expected message for stylelint report.
