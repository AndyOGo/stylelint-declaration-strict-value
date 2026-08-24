[**stylelint-declaration-strict-value v1.12.1**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getIgnoredValues

# Function: getIgnoredValues()

> **getIgnoredValues**(`ignoreValues`, `property`): [`IgnoreValueList`](../../../defaults/type-aliases/IgnoreValueList.md) \| `null`

Defined in: [lib/validation.ts:418](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/lib/validation.ts#L418)

**`Internal`**

Get the correct ignored values for a specific CSS declaration's property
out of a complex `ignoreValues` config hash or array.

## Parameters

### ignoreValues

[`IgnoreValueConfig`](../../../defaults/type-aliases/IgnoreValueConfig.md)

The value/-s to ignore.

### property

`string`

The specific CSS declaration's property of the current iteration.

## Returns

[`IgnoreValueList`](../../../defaults/type-aliases/IgnoreValueList.md) \| `null`

Returns ignored values for a specific CSS property, or `null`.
