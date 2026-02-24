[**stylelint-declaration-strict-value v1.11.1**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getIgnoredKeywords

# Function: getIgnoredKeywords()

> **getIgnoredKeywords**(`ignoreKeywords`, `property`): [`IgnoreValueList`](../../../defaults/type-aliases/IgnoreValueList.md) \| `null`

Defined in: [lib/validation.ts:359](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/lib/validation.ts#L359)

**`Internal`**

Get the correct ignored keywords for a specific CSS declaration's property
out of a complex `ignoreKeywords` config hash or array.

## Parameters

### ignoreKeywords

[`IgnoreValueConfig`](../../../defaults/type-aliases/IgnoreValueConfig.md)

The keyword/-s to ignore.

### property

`string`

The specific CSS declaration's property of the current iteration.

## Returns

[`IgnoreValueList`](../../../defaults/type-aliases/IgnoreValueList.md) \| `null`

Returns ignored keywords for a specific CSS property, or `null`.
