**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / "defaults"

# Module: "defaults"

## Index

### Interfaces

* [IDeclarationStrictValueResult](../interfaces/_defaults_.ideclarationstrictvalueresult.md)
* [IIgnoreValueHash](../interfaces/_defaults_.iignorevaluehash.md)
* [IIgnoreVariableOrFunctionHash](../interfaces/_defaults_.iignorevariableorfunctionhash.md)
* [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md)

### Type aliases

* [TAutoFixFunc](_defaults_.md#tautofixfunc)
* [TAutoFixFuncConfig](_defaults_.md#tautofixfuncconfig)
* [TAutoFixModule](_defaults_.md#tautofixmodule)
* [TIgnoreValue](_defaults_.md#tignorevalue)
* [TIgnoreValueConfig](_defaults_.md#tignorevalueconfig)
* [TIgnoreValueList](_defaults_.md#tignorevaluelist)
* [TIgnoreVariableOrFunctionConfig](_defaults_.md#tignorevariableorfunctionconfig)
* [TRegExpString](_defaults_.md#tregexpstring)

### Functions

* [isIIgnoreValueHash](_defaults_.md#isiignorevaluehash)

### Object literals

* [defaults](_defaults_.md#defaults)

## Type aliases

### TAutoFixFunc

Ƭ  **TAutoFixFunc**: (node: Node, result: [IDeclarationStrictValueResult](../interfaces/_defaults_.ideclarationstrictvalueresult.md), root: Root, config: [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md)) => string

*Defined in [defaults.ts:90](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L90)*

A autofix function.

___

### TAutoFixFuncConfig

Ƭ  **TAutoFixFuncConfig**: null \| undefined \| [TAutoFixModule](_defaults_.md#tautofixmodule) \| [TAutoFixFunc](_defaults_.md#tautofixfunc)

*Defined in [defaults.ts:103](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L103)*

Possible config for `autoFixFunc` option.

___

### TAutoFixModule

Ƭ  **TAutoFixModule**: string

*Defined in [defaults.ts:99](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L99)*

Path to autofix function module.

___

### TIgnoreValue

Ƭ  **TIgnoreValue**: number \| string \| [TRegExpString](_defaults_.md#tregexpstring)

*Defined in [defaults.ts:22](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L22)*

A CSS value to be ignored.

___

### TIgnoreValueConfig

Ƭ  **TIgnoreValueConfig**: null \| [TIgnoreValue](_defaults_.md#tignorevalue) \| [TIgnoreValueList](_defaults_.md#tignorevaluelist) \| [IIgnoreValueHash](../interfaces/_defaults_.iignorevaluehash.md)

*Defined in [defaults.ts:48](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L48)*

Possible config for `ignoreValues` and ~~`ignoreKeywords`~~ option.

___

### TIgnoreValueList

Ƭ  **TIgnoreValueList**: Array\<[TIgnoreValue](_defaults_.md#tignorevalue)>

*Defined in [defaults.ts:26](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L26)*

A list of CSS values to be ignored.

___

### TIgnoreVariableOrFunctionConfig

Ƭ  **TIgnoreVariableOrFunctionConfig**: boolean \| [IIgnoreVariableOrFunctionHash](../interfaces/_defaults_.iignorevariableorfunctionhash.md)

*Defined in [defaults.ts:12](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L12)*

Possible config for `ignoreVariables` and `ignoreFunctions` option.

___

### TRegExpString

Ƭ  **TRegExpString**: string

*Defined in [defaults.ts:18](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L18)*

A Regular Expression string to match a CSS property or value.

## Functions

### isIIgnoreValueHash

▸ `Const`**isIIgnoreValueHash**(`key`: unknown, `value`: unknown): key is IIgnoreValueHash

*Defined in [defaults.ts:40](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L40)*

**`internal`** 

#### Parameters:

Name | Type |
------ | ------ |
`key` | unknown |
`value` | unknown |

**Returns:** key is IIgnoreValueHash

## Object literals

### defaults

▪ `Const` **defaults**: object

*Defined in [defaults.ts:185](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/defaults.ts#L185)*

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
