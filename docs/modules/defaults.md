[stylelint-declaration-strict-value - v1.7.12](../README.md) / defaults

# Module: defaults

## Index

### Interfaces

* [DeclarationStrictValueResult](../interfaces/defaults.declarationstrictvalueresult.md)
* [IgnoreValueHash](../interfaces/defaults.ignorevaluehash.md)
* [IgnoreVariableOrFunctionHash](../interfaces/defaults.ignorevariableorfunctionhash.md)
* [SecondaryOptions](../interfaces/defaults.secondaryoptions.md)

### Type aliases

* [AutoFixFunc](defaults.md#autofixfunc)
* [AutoFixFuncConfig](defaults.md#autofixfuncconfig)
* [AutoFixModule](defaults.md#autofixmodule)
* [IgnoreValue](defaults.md#ignorevalue)
* [IgnoreValueConfig](defaults.md#ignorevalueconfig)
* [IgnoreValueList](defaults.md#ignorevaluelist)
* [IgnoreVariableOrFunctionConfig](defaults.md#ignorevariableorfunctionconfig)
* [RegExpString](defaults.md#regexpstring)

### Variables

* [default](defaults.md#default)
* [ruleName](defaults.md#rulename)

### Functions

* [isIIgnoreValueHash](defaults.md#isiignorevaluehash)

## Type aliases

### AutoFixFunc

Ƭ **AutoFixFunc**: (`node`: Node, `result`: [*DeclarationStrictValueResult*](../interfaces/defaults.declarationstrictvalueresult.md), `root`: Root, `config`: [*SecondaryOptions*](../interfaces/defaults.secondaryoptions.md)) => *string*

A autofix function.

Defined in: [defaults.ts:95](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L95)

___

### AutoFixFuncConfig

Ƭ **AutoFixFuncConfig**: *null* \| *undefined* \| [*AutoFixModule*](defaults.md#autofixmodule) \| [*AutoFixFunc*](defaults.md#autofixfunc)

Possible config for `autoFixFunc` option.

Defined in: [defaults.ts:108](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L108)

___

### AutoFixModule

Ƭ **AutoFixModule**: *string*

Path to autofix function module.

Defined in: [defaults.ts:104](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L104)

___

### IgnoreValue

Ƭ **IgnoreValue**: *number* \| *string* \| [*RegExpString*](defaults.md#regexpstring)

A CSS value to be ignored.

Defined in: [defaults.ts:27](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L27)

___

### IgnoreValueConfig

Ƭ **IgnoreValueConfig**: *null* \| [*IgnoreValue*](defaults.md#ignorevalue) \| [*IgnoreValueList*](defaults.md#ignorevaluelist) \| [*IgnoreValueHash*](../interfaces/defaults.ignorevaluehash.md)

Possible config for `ignoreValues` and ~~`ignoreKeywords`~~ option.

Defined in: [defaults.ts:53](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L53)

___

### IgnoreValueList

Ƭ **IgnoreValueList**: *Array*<[*IgnoreValue*](defaults.md#ignorevalue)\>

A list of CSS values to be ignored.

Defined in: [defaults.ts:31](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L31)

___

### IgnoreVariableOrFunctionConfig

Ƭ **IgnoreVariableOrFunctionConfig**: *boolean* \| [*IgnoreVariableOrFunctionHash*](../interfaces/defaults.ignorevariableorfunctionhash.md)

Possible config for `ignoreVariables` and `ignoreFunctions` option.

Defined in: [defaults.ts:17](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L17)

___

### RegExpString

Ƭ **RegExpString**: *string*

A Regular Expression string to match a CSS property or value.

Defined in: [defaults.ts:23](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L23)

## Variables

### default

• `Const` **default**: [*SecondaryOptions*](../interfaces/defaults.secondaryoptions.md)

Defined in: [defaults.ts:186](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L186)

___

### ruleName

• `Const` **ruleName**: *scale-unlimited/declaration-strict-value*= 'scale-unlimited/declaration-strict-value'

Rule Name.

Defined in: [defaults.ts:6](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L6)

Defined in: [index.ts:487](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/index.ts#L487)

## Functions

### isIIgnoreValueHash

▸ `Const`**isIIgnoreValueHash**(`key`: *unknown*, `value`: *unknown*): key is IgnoreValueHash

**`internal`** 

#### Parameters:

Name | Type |
------ | ------ |
`key` | *unknown* |
`value` | *unknown* |

**Returns:** key is IgnoreValueHash

Defined in: [defaults.ts:45](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L45)
