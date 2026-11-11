[**stylelint-declaration-strict-value v1.13.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / customExpected

# Function: customExpected()

> **customExpected**(`typesMessage`, `value`, `property`, `customMessage`): `string`

Defined in: [lib/validation.ts:274](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/1d74c3feff51fb9140e00068eb4137b2bcf791ee/src/lib/validation.ts#L274)

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
