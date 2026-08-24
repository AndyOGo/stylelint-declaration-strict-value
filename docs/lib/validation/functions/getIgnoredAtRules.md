[**stylelint-declaration-strict-value v1.12.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getIgnoredAtRules

# Function: getIgnoredAtRules()

> **getIgnoredAtRules**(`ignoreAtRules`, `property`, `longhandProp`): [`IgnoreAtRuleList`](../../../defaults/type-aliases/IgnoreAtRuleList.md) \| `null`

Defined in: [lib/validation.ts:445](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/lib/validation.ts#L445)

**`Internal`**

Get the correct ignored at-rules for a specific CSS declaration's property
out of a complex `ignoreAtRules` config hash or array.

## Parameters

### ignoreAtRules

[`IgnoreAtRuleConfig`](../../../defaults/type-aliases/IgnoreAtRuleConfig.md)

The at-rule/-s to ignore.

### property

`string`

The specific CSS declaration's property of the current iteration.

### longhandProp

The specific CSS declaration's longhand property of the current iteration.

`string` | `undefined`

## Returns

[`IgnoreAtRuleList`](../../../defaults/type-aliases/IgnoreAtRuleList.md) \| `null`

Returns ignored at-rules for a specific CSS property, or `null`.
