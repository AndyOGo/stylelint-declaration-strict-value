[**stylelint-declaration-strict-value v1.12.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / customExpected

# Function: customExpected()

> **customExpected**(`typesMessage`, `value`, `property`, `customMessage`): `string`

Defined in: [lib/validation.ts:274](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/lib/validation.ts#L274)

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
