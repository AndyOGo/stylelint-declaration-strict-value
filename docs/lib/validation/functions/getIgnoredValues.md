[**stylelint-declaration-strict-value v1.11.1**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getIgnoredValues

# Function: getIgnoredValues()

> **getIgnoredValues**(`ignoreValues`, `property`): [`IgnoreValueList`](../../../defaults/type-aliases/IgnoreValueList.md) \| `null`

Defined in: [lib/validation.ts:385](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/lib/validation.ts#L385)

**`Internal`**

Get the correct ignored values for a specific CSS declaration's property
out of a complex `ignoreValues` config hash or array.

## Parameters

### ignoreValues

[`IgnoreValueConfig`](../../../defaults/type-aliases/IgnoreValueConfig.md)

The values/-s to ignore.

### property

`string`

The specific CSS declaration's property of the current iteration.

## Returns

[`IgnoreValueList`](../../../defaults/type-aliases/IgnoreValueList.md) \| `null`

Returns ignored values for a specific CSS property, or `null`.
