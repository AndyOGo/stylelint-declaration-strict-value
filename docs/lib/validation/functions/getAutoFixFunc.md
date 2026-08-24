[**stylelint-declaration-strict-value v1.12.0**](../../../README.md)

***

[stylelint-declaration-strict-value](../../../README.md) / [lib/validation](../README.md) / getAutoFixFunc

# Function: getAutoFixFunc()

> **getAutoFixFunc**(`autoFixFunc`): [`AutoFixFunc`](../../../defaults/type-aliases/AutoFixFunc.md) \| `null`

Defined in: [lib/validation.ts:502](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/lib/validation.ts#L502)

**`Internal`**

Get the auto-fix function either by a function directly or from a source file.

## Parameters

### autoFixFunc

[`AutoFixFuncConfig`](../../../defaults/type-aliases/AutoFixFuncConfig.md)

A JavaScript function or a module path to resolve it, also from `cwd`.

## Returns

[`AutoFixFunc`](../../../defaults/type-aliases/AutoFixFunc.md) \| `null`

Returns the auto-fix function if found, else `null`.
