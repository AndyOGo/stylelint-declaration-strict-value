[**stylelint-declaration-strict-value v1.12.0**](../../README.md)

***

[stylelint-declaration-strict-value](../../README.md) / [index](../README.md) / messages

# Variable: messages

> `const` **messages**: `object`

Defined in: [index.ts:38](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/index.ts#L38)

## Type Declaration

### customExpected()

> **customExpected**: (`typesMessage`, `value`, `property`, `customMessage`) => `string`

**`Internal`**

Build custom expected message for stylelint report.

#### Parameters

##### typesMessage

`string`

An expected types message for stylelint report.

##### value

`string`

The CSS declaration's value.

##### property

`string`

The CSS declaration's property.

##### customMessage

`string`

A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`.

#### Returns

`string`

Returns a custom expected message for stylelint report.

### expected()

> **expected**: (`typesMessage`, `value`, `property`) => `string`

**`Internal`**

Build expected message for stylelint report.

#### Parameters

##### typesMessage

`string`

An expected types message for stylelint report.

##### value

`string`

The CSS declaration's value.

##### property

`string`

The CSS declaration's property.

#### Returns

`string`

Returns an expected message for stylelint report.
