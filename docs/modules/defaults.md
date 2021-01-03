[stylelint-declaration-strict-value - v1.7.7](../README.md) / defaults

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

### Functions

* [isIIgnoreValueHash](defaults.md#isiignorevaluehash)

## Type aliases

### AutoFixFunc

Ƭ **AutoFixFunc**: (`node`: Node, `result`: [*DeclarationStrictValueResult*](../interfaces/defaults.declarationstrictvalueresult.md), `root`: Root, `config`: [*SecondaryOptions*](../interfaces/defaults.secondaryoptions.md)) => *string*

A autofix function.

Defined in: [defaults.ts:90](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L90)

___

### AutoFixFuncConfig

Ƭ **AutoFixFuncConfig**: *null* \| *undefined* \| [*AutoFixModule*](defaults.md#autofixmodule) \| [*AutoFixFunc*](defaults.md#autofixfunc)

Possible config for `autoFixFunc` option.

Defined in: [defaults.ts:103](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L103)

___

### AutoFixModule

Ƭ **AutoFixModule**: *string*

Path to autofix function module.

Defined in: [defaults.ts:99](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L99)

___

### IgnoreValue

Ƭ **IgnoreValue**: *number* \| *string* \| [*RegExpString*](defaults.md#regexpstring)

A CSS value to be ignored.

Defined in: [defaults.ts:22](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L22)

___

### IgnoreValueConfig

Ƭ **IgnoreValueConfig**: *null* \| [*IgnoreValue*](defaults.md#ignorevalue) \| [*IgnoreValueList*](defaults.md#ignorevaluelist) \| [*IgnoreValueHash*](../interfaces/defaults.ignorevaluehash.md)

Possible config for `ignoreValues` and ~~`ignoreKeywords`~~ option.

Defined in: [defaults.ts:48](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L48)

___

### IgnoreValueList

Ƭ **IgnoreValueList**: *Array*<[*IgnoreValue*](defaults.md#ignorevalue)\>

A list of CSS values to be ignored.

Defined in: [defaults.ts:26](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L26)

___

### IgnoreVariableOrFunctionConfig

Ƭ **IgnoreVariableOrFunctionConfig**: *boolean* \| [*IgnoreVariableOrFunctionHash*](../interfaces/defaults.ignorevariableorfunctionhash.md)

Possible config for `ignoreVariables` and `ignoreFunctions` option.

Defined in: [defaults.ts:12](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L12)

___

### RegExpString

Ƭ **RegExpString**: *string*

A Regular Expression string to match a CSS property or value.

Defined in: [defaults.ts:18](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L18)

## Variables

### default

• `Const` **default**: [*SecondaryOptions*](../interfaces/defaults.secondaryoptions.md)

Defined in: [defaults.ts:181](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L181)

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

Defined in: [defaults.ts:40](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L40)
