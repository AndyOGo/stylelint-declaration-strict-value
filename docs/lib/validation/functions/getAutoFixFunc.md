[**stylelint-declaration-strict-value v1.11.1**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getAutoFixFunc

# Function: getAutoFixFunc()

> **getAutoFixFunc**(`autoFixFunc`): [`AutoFixFunc`](../../../defaults/type-aliases/AutoFixFunc.md) \| `null`

Defined in: [lib/validation.ts:410](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/lib/validation.ts#L410)

**`Internal`**

Get the auto-fix function either by a function directly or from a source file.

## Parameters

### autoFixFunc

[`AutoFixFuncConfig`](../../../defaults/type-aliases/AutoFixFuncConfig.md)

A JavaScript function or a module path to resolve it, also from `cwd`.

## Returns

[`AutoFixFunc`](../../../defaults/type-aliases/AutoFixFunc.md) \| `null`

Returns the auto-fix function if found, else `null`.
