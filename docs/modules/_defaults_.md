**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / "defaults"

# Module: "defaults"

## Index

### Interfaces

* [DeclarationStrictValueResult](../interfaces/_defaults_.declarationstrictvalueresult.md)
* [IgnoreValueHash](../interfaces/_defaults_.ignorevaluehash.md)
* [IgnoreVariableOrFunctionHash](../interfaces/_defaults_.ignorevariableorfunctionhash.md)
* [SecondaryOptions](../interfaces/_defaults_.secondaryoptions.md)

### Type aliases

* [AutoFixFunc](_defaults_.md#autofixfunc)
* [AutoFixFuncConfig](_defaults_.md#autofixfuncconfig)
* [AutoFixModule](_defaults_.md#autofixmodule)
* [IgnoreValue](_defaults_.md#ignorevalue)
* [IgnoreValueConfig](_defaults_.md#ignorevalueconfig)
* [IgnoreValueList](_defaults_.md#ignorevaluelist)
* [IgnoreVariableOrFunctionConfig](_defaults_.md#ignorevariableorfunctionconfig)
* [RegExpString](_defaults_.md#regexpstring)

### Functions

* [isIIgnoreValueHash](_defaults_.md#isiignorevaluehash)

### Object literals

* [defaults](_defaults_.md#defaults)

## Type aliases

### AutoFixFunc

Ƭ  **AutoFixFunc**: (node: Node, result: [DeclarationStrictValueResult](../interfaces/_defaults_.declarationstrictvalueresult.md), root: Root, config: [SecondaryOptions](../interfaces/_defaults_.secondaryoptions.md)) => string

*Defined in [defaults.ts:90](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L90)*

A autofix function.

___

### AutoFixFuncConfig

Ƭ  **AutoFixFuncConfig**: null \| undefined \| [AutoFixModule](_defaults_.md#autofixmodule) \| [AutoFixFunc](_defaults_.md#autofixfunc)

*Defined in [defaults.ts:103](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L103)*

Possible config for `autoFixFunc` option.

___

### AutoFixModule

Ƭ  **AutoFixModule**: string

*Defined in [defaults.ts:99](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L99)*

Path to autofix function module.

___

### IgnoreValue

Ƭ  **IgnoreValue**: number \| string \| [RegExpString](_defaults_.md#regexpstring)

*Defined in [defaults.ts:22](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L22)*

A CSS value to be ignored.

___

### IgnoreValueConfig

Ƭ  **IgnoreValueConfig**: null \| [IgnoreValue](_defaults_.md#ignorevalue) \| [IgnoreValueList](_defaults_.md#ignorevaluelist) \| [IgnoreValueHash](../interfaces/_defaults_.ignorevaluehash.md)

*Defined in [defaults.ts:48](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L48)*

Possible config for `ignoreValues` and ~~`ignoreKeywords`~~ option.

___

### IgnoreValueList

Ƭ  **IgnoreValueList**: Array\<[IgnoreValue](_defaults_.md#ignorevalue)>

*Defined in [defaults.ts:26](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L26)*

A list of CSS values to be ignored.

___

### IgnoreVariableOrFunctionConfig

Ƭ  **IgnoreVariableOrFunctionConfig**: boolean \| [IgnoreVariableOrFunctionHash](../interfaces/_defaults_.ignorevariableorfunctionhash.md)

*Defined in [defaults.ts:12](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L12)*

Possible config for `ignoreVariables` and `ignoreFunctions` option.

___

### RegExpString

Ƭ  **RegExpString**: string

*Defined in [defaults.ts:18](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L18)*

A Regular Expression string to match a CSS property or value.

## Functions

### isIIgnoreValueHash

▸ `Const`**isIIgnoreValueHash**(`key`: unknown, `value`: unknown): key is IgnoreValueHash

*Defined in [defaults.ts:40](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L40)*

**`internal`** 

#### Parameters:

Name | Type |
------ | ------ |
`key` | unknown |
`value` | unknown |

**Returns:** key is IgnoreValueHash

## Object literals

### defaults

▪ `Const` **defaults**: object

*Defined in [defaults.ts:181](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L181)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`autoFixFunc` | null | null |
`disableFix` | false | false |
`expandShorthand` | false | false |
`ignoreFunctions` | true | true |
`ignoreKeywords` | null | null |
`ignoreValues` | null | null |
`ignoreVariables` | true | true |
`message` | undefined | undefined |
`recurseLonghand` | false | false |
`severity` | string | "error" |
