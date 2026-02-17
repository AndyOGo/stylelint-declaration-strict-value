[**stylelint-declaration-strict-value v1.11.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getAutoFixFunc

# Function: getAutoFixFunc()

> **getAutoFixFunc**(`autoFixFunc`): [`AutoFixFunc`](../../../defaults/type-aliases/AutoFixFunc.md) \| `null`

Defined in: [lib/validation.ts:410](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/d6ba666a8a77ad8121a2568c6cf2fa2b2d1d3d4f/src/lib/validation.ts#L410)

**`Internal`**

Get the auto-fix function either by a function directly or from a source file.

## Parameters

### autoFixFunc

[`AutoFixFuncConfig`](../../../defaults/type-aliases/AutoFixFuncConfig.md)

A JavaScript function or a module path to resolve it, also from `cwd`.

## Returns

[`AutoFixFunc`](../../../defaults/type-aliases/AutoFixFunc.md) \| `null`

Returns the auto-fix function if found, else `null`.
