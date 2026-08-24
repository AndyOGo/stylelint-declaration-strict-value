[**stylelint-declaration-strict-value v1.12.1**](../../README.md)

***

[stylelint-declaration-strict-value](../../README.md) / [index](../README.md) / messages

# Variable: messages

> `const` **messages**: `object`

Defined in: [index.ts:38](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/index.ts#L38)

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
