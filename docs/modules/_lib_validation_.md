**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / "lib/validation"

# Module: "lib/validation"

## Index

### Type aliases

* [TExpectedType](_lib_validation_.md#texpectedtype)
* [TExpectedTypes](_lib_validation_.md#texpectedtypes)

### Functions

* [expected](_lib_validation_.md#expected)
* [getAutoFixFunc](_lib_validation_.md#getautofixfunc)
* [getIgnoredKeywords](_lib_validation_.md#getignoredkeywords)
* [getIgnoredValues](_lib_validation_.md#getignoredvalues)
* [getIgnoredVariablesOrFunctions](_lib_validation_.md#getignoredvariablesorfunctions)
* [getTypes](_lib_validation_.md#gettypes)
* [isNumberOrString](_lib_validation_.md#isnumberorstring)
* [validBooleanHash](_lib_validation_.md#validbooleanhash)
* [validHash](_lib_validation_.md#validhash)
* [validOptions](_lib_validation_.md#validoptions)
* [validProperties](_lib_validation_.md#validproperties)

## Type aliases

### TExpectedType

Ƭ  **TExpectedType**: \"variable\" \| \"function\" \| \"keyword\"

*Defined in [lib/validation.ts:170](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L170)*

___

### TExpectedTypes

Ƭ  **TExpectedTypes**: Array\<[TExpectedType](_lib_validation_.md#texpectedtype)>

*Defined in [lib/validation.ts:171](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L171)*

## Functions

### expected

▸ **expected**(`types`: [TExpectedType](_lib_validation_.md#texpectedtype) \| [TExpectedTypes](_lib_validation_.md#texpectedtypes), `value`: string, `property`: string, `customMessage?`: string): string

*Defined in [lib/validation.ts:184](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L184)*

Build expected message for stylelint report.

**`internal`** 

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`types` | [TExpectedType](_lib_validation_.md#texpectedtype) \| [TExpectedTypes](_lib_validation_.md#texpectedtypes) | - | Either `variable`, `function` and/or `keyword`. |
`value` | string | - | The CSS declaration's value. |
`property` | string | - | The CSS declaration's property. |
`customMessage` | string | "" | A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`.  |

**Returns:** string

Returns an expected message for stylelint report.

___

### getAutoFixFunc

▸ **getAutoFixFunc**(`autoFixFunc`: [TAutoFixFuncOrPath](_defaults_.md#tautofixfuncorpath)): null \| [TAutoFixFunc](_defaults_.md#tautofixfunc)

*Defined in [lib/validation.ts:348](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L348)*

Get the auto-fix function either by a function directly or from source file.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`autoFixFunc` | [TAutoFixFuncOrPath](_defaults_.md#tautofixfuncorpath) | A JavaScript function or a module path to resolve it, also from cwd.  |

**Returns:** null \| [TAutoFixFunc](_defaults_.md#tautofixfunc)

Returns the auto-fix function if found, else `null`.

___

### getIgnoredKeywords

▸ **getIgnoredKeywords**(`ignoreKeywords`: [TOption](_defaults_.md#toption), `property`: string): null \| [TOptionArray](_defaults_.md#toptionarray)

*Defined in [lib/validation.ts:297](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L297)*

Get the correct ignored keywords for a specific CSS declaration's property
out of a complex `ignoreKeywords` config hash or array.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreKeywords` | [TOption](_defaults_.md#toption) | The keyword/-s to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration.  |

**Returns:** null \| [TOptionArray](_defaults_.md#toptionarray)

Returns ignored keywords for a specific CSS property, or `null`.

___

### getIgnoredValues

▸ **getIgnoredValues**(`ignoreValues`: [TOption](_defaults_.md#toption), `property`: string): null \| [TOptionArray](_defaults_.md#toptionarray)

*Defined in [lib/validation.ts:323](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L323)*

Get the correct ignored values for a specific CSS declaration's property
out of a complex `ignoreValues` config hash or array.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreValues` | [TOption](_defaults_.md#toption) | The values/-s to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration. |

**Returns:** null \| [TOptionArray](_defaults_.md#toptionarray)

Returns ignored values for a specific CSS property, or `null`.

___

### getIgnoredVariablesOrFunctions

▸ **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`: [IBoolOption](_defaults_.md#ibooloption), `property`: string): boolean

*Defined in [lib/validation.ts:265](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L265)*

Get the correct ignored variable or function for a specific CSS declaration's property
out of a complex `ignoreVariablesOrFunctions` config hash or boolean.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreVariablesOrFunctions` | [IBoolOption](_defaults_.md#ibooloption) | The variables or functions to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration.  |

**Returns:** boolean

Returns ignored variable or function for a specific CSS property.

___

### getTypes

▸ **getTypes**(`config`: [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md), `property`: string): [TExpectedTypes](_lib_validation_.md#texpectedtypes)

*Defined in [lib/validation.ts:224](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L224)*

Get configured types for stylelint report message.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`config` | [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md) | The secondary stylelint-plugin config. |
`property` | string | The specific CSS declaration's property of the current iteration.  |

**Returns:** [TExpectedTypes](_lib_validation_.md#texpectedtypes)

Returns a list of configured types.

___

### isNumberOrString

▸ **isNumberOrString**(`value`: unknown): value is TOptionPrimitive

*Defined in [lib/validation.ts:24](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L24)*

Check if type is either `number` or `string`.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | Any value.  |

**Returns:** value is TOptionPrimitive

Returns `true` if `value`'s type is either `number` or `string`, else `false`.

___

### validBooleanHash

▸ **validBooleanHash**(`actual`: unknown): actual is IBoolHash

*Defined in [lib/validation.ts:71](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L71)*

Validate optional boolean hash variable/function config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | A variable/function config.  |

**Returns:** actual is IBoolHash

Returns `true` if hash variable/function config is valid, else `false`.

___

### validHash

▸ **validHash**(`actual`: unknown): actual is IOptionHash

*Defined in [lib/validation.ts:55](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L55)*

Validate optional hash keyword config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | A keyword config.  |

**Returns:** actual is IOptionHash

Returns `true` if hash keyword config is valid, else `false`.

___

### validOptions

▸ **validOptions**(`actual`: [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md)): boolean

*Defined in [lib/validation.ts:87](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L87)*

Validate optional secondary options of stylelint plugin config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md) | The actual config to validate.  |

**Returns:** boolean

Returns `true` if secondary options are valied, else `false`.

___

### validProperties

▸ **validProperties**(`actual`: unknown): actual is TOptionPrimitive \| TOptionArray

*Defined in [lib/validation.ts:38](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/lib/validation.ts#L38)*

Validate primary options of stylelint plugin config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | The actual config to validate.  |

**Returns:** actual is TOptionPrimitive \| TOptionArray

Returns `true` if primary options are valid, else `false`.
