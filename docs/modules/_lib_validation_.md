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

*Defined in [lib/validation.ts:178](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L178)*

**`internal`** 

___

### TExpectedTypes

Ƭ  **TExpectedTypes**: Array\<[TExpectedType](_lib_validation_.md#texpectedtype)>

*Defined in [lib/validation.ts:182](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L182)*

**`internal`** 

## Functions

### expected

▸ **expected**(`types`: [TExpectedType](_lib_validation_.md#texpectedtype) \| [TExpectedTypes](_lib_validation_.md#texpectedtypes), `value`: string, `property`: string, `customMessage?`: string): string

*Defined in [lib/validation.ts:195](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L195)*

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

▸ **getAutoFixFunc**(`autoFixFunc`: [TAutoFixFuncConfig](_defaults_.md#tautofixfuncconfig)): null \| [TAutoFixFunc](_defaults_.md#tautofixfunc)

*Defined in [lib/validation.ts:359](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L359)*

Get the auto-fix function either by a function directly or from source file.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`autoFixFunc` | [TAutoFixFuncConfig](_defaults_.md#tautofixfuncconfig) | A JavaScript function or a module path to resolve it, also from cwd.  |

**Returns:** null \| [TAutoFixFunc](_defaults_.md#tautofixfunc)

Returns the auto-fix function if found, else `null`.

___

### getIgnoredKeywords

▸ **getIgnoredKeywords**(`ignoreKeywords`: [TIgnoreValueConfig](_defaults_.md#tignorevalueconfig), `property`: string): null \| [TIgnoreValueList](_defaults_.md#tignorevaluelist)

*Defined in [lib/validation.ts:308](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L308)*

Get the correct ignored keywords for a specific CSS declaration's property
out of a complex `ignoreKeywords` config hash or array.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreKeywords` | [TIgnoreValueConfig](_defaults_.md#tignorevalueconfig) | The keyword/-s to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration.  |

**Returns:** null \| [TIgnoreValueList](_defaults_.md#tignorevaluelist)

Returns ignored keywords for a specific CSS property, or `null`.

___

### getIgnoredValues

▸ **getIgnoredValues**(`ignoreValues`: [TIgnoreValueConfig](_defaults_.md#tignorevalueconfig), `property`: string): null \| [TIgnoreValueList](_defaults_.md#tignorevaluelist)

*Defined in [lib/validation.ts:334](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L334)*

Get the correct ignored values for a specific CSS declaration's property
out of a complex `ignoreValues` config hash or array.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreValues` | [TIgnoreValueConfig](_defaults_.md#tignorevalueconfig) | The values/-s to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration. |

**Returns:** null \| [TIgnoreValueList](_defaults_.md#tignorevaluelist)

Returns ignored values for a specific CSS property, or `null`.

___

### getIgnoredVariablesOrFunctions

▸ **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`: [TIgnoreVariableOrFunctionConfig](_defaults_.md#tignorevariableorfunctionconfig), `property`: string): boolean

*Defined in [lib/validation.ts:276](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L276)*

Get the correct ignored variable or function for a specific CSS declaration's property
out of a complex `ignoreVariablesOrFunctions` config hash or boolean.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreVariablesOrFunctions` | [TIgnoreVariableOrFunctionConfig](_defaults_.md#tignorevariableorfunctionconfig) | The variables or functions to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration.  |

**Returns:** boolean

Returns ignored variable or function for a specific CSS property.

___

### getTypes

▸ **getTypes**(`config`: [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md), `property`: string): [TExpectedTypes](_lib_validation_.md#texpectedtypes)

*Defined in [lib/validation.ts:235](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L235)*

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

▸ **isNumberOrString**(`value`: unknown): value is TIgnoreValue

*Defined in [lib/validation.ts:24](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L24)*

Check if type is either `number` or `string`.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | Any value.  |

**Returns:** value is TIgnoreValue

Returns `true` if `value`'s type is either `number` or `string`, else `false`.

___

### validBooleanHash

▸ **validBooleanHash**(`actual`: unknown): actual is IIgnoreVariableOrFunctionHash

*Defined in [lib/validation.ts:71](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L71)*

Validate optional boolean hash variable/function config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | A variable/function config.  |

**Returns:** actual is IIgnoreVariableOrFunctionHash

Returns `true` if hash variable/function config is valid, else `false`.

___

### validHash

▸ **validHash**(`actual`: unknown): actual is IIgnoreValueHash

*Defined in [lib/validation.ts:55](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L55)*

Validate optional hash keyword config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | A keyword config.  |

**Returns:** actual is IIgnoreValueHash

Returns `true` if hash keyword config is valid, else `false`.

___

### validOptions

▸ **validOptions**(`actual`: [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md)): boolean

*Defined in [lib/validation.ts:92](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L92)*

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

▸ **validProperties**(`actual`: unknown): actual is TIgnoreValue \| TIgnoreValueList

*Defined in [lib/validation.ts:38](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/lib/validation.ts#L38)*

Validate primary options of stylelint plugin config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | The actual config to validate.  |

**Returns:** actual is TIgnoreValue \| TIgnoreValueList

Returns `true` if primary options are valid, else `false`.
