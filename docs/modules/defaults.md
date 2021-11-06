[stylelint-declaration-strict-value - v1.8.0](../README.md) / defaults

# Module: defaults

## Table of contents

### Interfaces

- [DeclarationStrictValueResult](../interfaces/defaults.DeclarationStrictValueResult.md)
- [IgnoreValueHash](../interfaces/defaults.IgnoreValueHash.md)
- [IgnoreVariableOrFunctionHash](../interfaces/defaults.IgnoreVariableOrFunctionHash.md)
- [SecondaryOptions](../interfaces/defaults.SecondaryOptions.md)

### Type aliases

- [AutoFixFunc](defaults.md#autofixfunc)
- [AutoFixFuncConfig](defaults.md#autofixfuncconfig)
- [AutoFixModule](defaults.md#autofixmodule)
- [IgnoreValue](defaults.md#ignorevalue)
- [IgnoreValueConfig](defaults.md#ignorevalueconfig)
- [IgnoreValueList](defaults.md#ignorevaluelist)
- [IgnoreVariableOrFunctionConfig](defaults.md#ignorevariableorfunctionconfig)
- [RegExpString](defaults.md#regexpstring)

### Variables

- [default](defaults.md#default)
- [ruleName](defaults.md#rulename)

### Functions

- [isIIgnoreValueHash](defaults.md#isiignorevaluehash)

## Type aliases

### AutoFixFunc

Ƭ **AutoFixFunc**: (`node`: `Node`, `result`: [`DeclarationStrictValueResult`](../interfaces/defaults.DeclarationStrictValueResult.md), `root`: `Root`, `config`: [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md)) => `string`

#### Type declaration

▸ (`node`, `result`, `root`, `config`): `string`

A autofix function.

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |
| `result` | [`DeclarationStrictValueResult`](../interfaces/defaults.DeclarationStrictValueResult.md) |
| `root` | `Root` |
| `config` | [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md) |

##### Returns

`string`

#### Defined in

[src/defaults.ts:95](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L95)

___

### AutoFixFuncConfig

Ƭ **AutoFixFuncConfig**: ``null`` \| `undefined` \| [`AutoFixModule`](defaults.md#autofixmodule) \| [`AutoFixFunc`](defaults.md#autofixfunc)

Possible config for `autoFixFunc` option.

#### Defined in

[src/defaults.ts:108](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L108)

___

### AutoFixModule

Ƭ **AutoFixModule**: `string`

Path to autofix function module.

#### Defined in

[src/defaults.ts:104](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L104)

___

### IgnoreValue

Ƭ **IgnoreValue**: `number` \| `string` \| [`RegExpString`](defaults.md#regexpstring)

A CSS value to be ignored.

#### Defined in

[src/defaults.ts:27](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L27)

___

### IgnoreValueConfig

Ƭ **IgnoreValueConfig**: ``null`` \| [`IgnoreValue`](defaults.md#ignorevalue) \| [`IgnoreValueList`](defaults.md#ignorevaluelist) \| [`IgnoreValueHash`](../interfaces/defaults.IgnoreValueHash.md)

Possible config for `ignoreValues` and ~~`ignoreKeywords`~~ option.

#### Defined in

[src/defaults.ts:53](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L53)

___

### IgnoreValueList

Ƭ **IgnoreValueList**: [`IgnoreValue`](defaults.md#ignorevalue)[]

A list of CSS values to be ignored.

#### Defined in

[src/defaults.ts:31](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L31)

___

### IgnoreVariableOrFunctionConfig

Ƭ **IgnoreVariableOrFunctionConfig**: `boolean` \| [`IgnoreVariableOrFunctionHash`](../interfaces/defaults.IgnoreVariableOrFunctionHash.md)

Possible config for `ignoreVariables` and `ignoreFunctions` option.

#### Defined in

[src/defaults.ts:17](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L17)

___

### RegExpString

Ƭ **RegExpString**: `string`

A Regular Expression string to match a CSS property or value.

#### Defined in

[src/defaults.ts:23](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L23)

## Variables

### default

• **default**: [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md)

#### Defined in

[src/defaults.ts:186](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L186)

___

### ruleName

• **ruleName**: ``"scale-unlimited/declaration-strict-value"``

Rule Name.

#### Defined in

[src/defaults.ts:6](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L6)

## Functions

### isIIgnoreValueHash

▸ `Const` **isIIgnoreValueHash**(`key`, `value`): key is IgnoreValueHash

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `unknown` |
| `value` | `unknown` |

#### Returns

key is IgnoreValueHash

#### Defined in

[src/defaults.ts:45](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L45)
