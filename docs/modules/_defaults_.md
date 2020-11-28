**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / "defaults"

# Module: "defaults"

## Index

### Interfaces

* [IBoolHash](../interfaces/_defaults_.iboolhash.md)
* [IOptionHash](../interfaces/_defaults_.ioptionhash.md)
* [IResult](../interfaces/_defaults_.iresult.md)
* [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md)

### Type aliases

* [IBoolOption](_defaults_.md#ibooloption)
* [TAutoFixFunc](_defaults_.md#tautofixfunc)
* [TAutoFixFuncOrPath](_defaults_.md#tautofixfuncorpath)
* [TOption](_defaults_.md#toption)
* [TOptionArray](_defaults_.md#toptionarray)
* [TOptionPrimitive](_defaults_.md#toptionprimitive)

### Functions

* [isIOptionHash](_defaults_.md#isioptionhash)

### Object literals

* [defaults](_defaults_.md#defaults)

## Type aliases

### IBoolOption

Ƭ  **IBoolOption**: boolean \| [IBoolHash](../interfaces/_defaults_.iboolhash.md)

*Defined in [defaults.ts:6](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L6)*

___

### TAutoFixFunc

Ƭ  **TAutoFixFunc**: (node: Node, result: [IResult](../interfaces/_defaults_.iresult.md), root: Root, config: [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md)) => string

*Defined in [defaults.ts:26](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L26)*

___

### TAutoFixFuncOrPath

Ƭ  **TAutoFixFuncOrPath**: null \| undefined \| string \| [TAutoFixFunc](_defaults_.md#tautofixfunc)

*Defined in [defaults.ts:32](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L32)*

___

### TOption

Ƭ  **TOption**: [TOptionPrimitive](_defaults_.md#toptionprimitive) \| [TOptionArray](_defaults_.md#toptionarray) \| [IOptionHash](../interfaces/_defaults_.ioptionhash.md)

*Defined in [defaults.ts:17](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L17)*

___

### TOptionArray

Ƭ  **TOptionArray**: Array\<[TOptionPrimitive](_defaults_.md#toptionprimitive)>

*Defined in [defaults.ts:8](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L8)*

___

### TOptionPrimitive

Ƭ  **TOptionPrimitive**: number \| string

*Defined in [defaults.ts:7](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L7)*

## Functions

### isIOptionHash

▸ `Const`**isIOptionHash**(`key`: unknown, `value`: unknown): key is IOptionHash

*Defined in [defaults.ts:12](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | unknown |
`value` | unknown |

**Returns:** key is IOptionHash

## Object literals

### defaults

▪ `Const` **defaults**: object

*Defined in [defaults.ts:112](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L112)*

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
