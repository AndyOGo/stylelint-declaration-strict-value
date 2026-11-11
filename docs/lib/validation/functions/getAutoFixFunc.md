[**stylelint-declaration-strict-value v1.13.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getAutoFixFunc

# Function: getAutoFixFunc()

> **getAutoFixFunc**(`autoFixFunc`): [`AutoFixFunc`](../../../defaults/type-aliases/AutoFixFunc.md) \| `null`

Defined in: [lib/validation.ts:502](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/1d74c3feff51fb9140e00068eb4137b2bcf791ee/src/lib/validation.ts#L502)

**`Internal`**

Get the auto-fix function either by a function directly or from a source file.

## Parameters

### autoFixFunc

[`AutoFixFuncConfig`](../../../defaults/type-aliases/AutoFixFuncConfig.md)

A JavaScript function or a module path to resolve it, also from `cwd`.

## Returns

[`AutoFixFunc`](../../../defaults/type-aliases/AutoFixFunc.md) \| `null`

Returns the auto-fix function if found, else `null`.
