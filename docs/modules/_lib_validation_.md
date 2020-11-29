**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / "lib/validation"

# Module: "lib/validation"

## Index

### Type aliases

* [ExpectedType](_lib_validation_.md#expectedtype)
* [ExpectedTypes](_lib_validation_.md#expectedtypes)

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

### ExpectedType

Ƭ  **ExpectedType**: \"variable\" \| \"function\" \| \"keyword\"

*Defined in [lib/validation.ts:179](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L179)*

Expected type of CSS value, available by configuration.

**`internal`** 

___

### ExpectedTypes

Ƭ  **ExpectedTypes**: Array\<[ExpectedType](_lib_validation_.md#expectedtype)>

*Defined in [lib/validation.ts:184](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L184)*

Expected types of CSS value, as configured.

**`internal`** 

## Functions

### expected

▸ **expected**(`types`: [ExpectedType](_lib_validation_.md#expectedtype) \| [ExpectedTypes](_lib_validation_.md#expectedtypes), `value`: string, `property`: string, `customMessage?`: string): string

*Defined in [lib/validation.ts:197](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L197)*

Build expected message for stylelint report.

**`internal`** 

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`types` | [ExpectedType](_lib_validation_.md#expectedtype) \| [ExpectedTypes](_lib_validation_.md#expectedtypes) | - | Either `variable`, `function` and/or `keyword`. |
`value` | string | - | The CSS declaration's value. |
`property` | string | - | The CSS declaration's property. |
`customMessage` | string | "" | A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`.  |

**Returns:** string

Returns an expected message for stylelint report.

___

### getAutoFixFunc

▸ **getAutoFixFunc**(`autoFixFunc`: [AutoFixFuncConfig](_defaults_.md#autofixfuncconfig)): null \| [AutoFixFunc](_defaults_.md#autofixfunc)

*Defined in [lib/validation.ts:361](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L361)*

Get the auto-fix function either by a function directly or from source file.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`autoFixFunc` | [AutoFixFuncConfig](_defaults_.md#autofixfuncconfig) | A JavaScript function or a module path to resolve it, also from cwd.  |

**Returns:** null \| [AutoFixFunc](_defaults_.md#autofixfunc)

Returns the auto-fix function if found, else `null`.

___

### getIgnoredKeywords

▸ **getIgnoredKeywords**(`ignoreKeywords`: [IgnoreValueConfig](_defaults_.md#ignorevalueconfig), `property`: string): null \| [IgnoreValueList](_defaults_.md#ignorevaluelist)

*Defined in [lib/validation.ts:310](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L310)*

Get the correct ignored keywords for a specific CSS declaration's property
out of a complex `ignoreKeywords` config hash or array.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreKeywords` | [IgnoreValueConfig](_defaults_.md#ignorevalueconfig) | The keyword/-s to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration.  |

**Returns:** null \| [IgnoreValueList](_defaults_.md#ignorevaluelist)

Returns ignored keywords for a specific CSS property, or `null`.

___

### getIgnoredValues

▸ **getIgnoredValues**(`ignoreValues`: [IgnoreValueConfig](_defaults_.md#ignorevalueconfig), `property`: string): null \| [IgnoreValueList](_defaults_.md#ignorevaluelist)

*Defined in [lib/validation.ts:336](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L336)*

Get the correct ignored values for a specific CSS declaration's property
out of a complex `ignoreValues` config hash or array.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreValues` | [IgnoreValueConfig](_defaults_.md#ignorevalueconfig) | The values/-s to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration. |

**Returns:** null \| [IgnoreValueList](_defaults_.md#ignorevaluelist)

Returns ignored values for a specific CSS property, or `null`.

___

### getIgnoredVariablesOrFunctions

▸ **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`: [IgnoreVariableOrFunctionConfig](_defaults_.md#ignorevariableorfunctionconfig), `property`: string): boolean

*Defined in [lib/validation.ts:278](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L278)*

Get the correct ignored variable or function for a specific CSS declaration's property
out of a complex `ignoreVariablesOrFunctions` config hash or boolean.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreVariablesOrFunctions` | [IgnoreVariableOrFunctionConfig](_defaults_.md#ignorevariableorfunctionconfig) | The variables or functions to ignore. |
`property` | string | The specific CSS declaration's property of the current iteration.  |

**Returns:** boolean

Returns ignored variable or function for a specific CSS property.

___

### getTypes

▸ **getTypes**(`config`: [SecondaryOptions](../interfaces/_defaults_.secondaryoptions.md), `property`: string): [ExpectedTypes](_lib_validation_.md#expectedtypes)

*Defined in [lib/validation.ts:237](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L237)*

Get configured types for stylelint report message.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`config` | [SecondaryOptions](../interfaces/_defaults_.secondaryoptions.md) | The secondary stylelint-plugin config. |
`property` | string | The specific CSS declaration's property of the current iteration.  |

**Returns:** [ExpectedTypes](_lib_validation_.md#expectedtypes)

Returns a list of configured types.

___

### isNumberOrString

▸ **isNumberOrString**(`value`: unknown): value is IgnoreValue

*Defined in [lib/validation.ts:24](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L24)*

Check if type is either `number` or `string`.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | Any value.  |

**Returns:** value is IgnoreValue

Returns `true` if `value`'s type is either `number` or `string`, else `false`.

___

### validBooleanHash

▸ **validBooleanHash**(`actual`: unknown): actual is IgnoreVariableOrFunctionHash

*Defined in [lib/validation.ts:71](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L71)*

Validate optional boolean hash variable/function config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | A variable/function config.  |

**Returns:** actual is IgnoreVariableOrFunctionHash

Returns `true` if hash variable/function config is valid, else `false`.

___

### validHash

▸ **validHash**(`actual`: unknown): actual is IgnoreValueHash

*Defined in [lib/validation.ts:55](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L55)*

Validate optional hash keyword config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | A keyword config.  |

**Returns:** actual is IgnoreValueHash

Returns `true` if hash keyword config is valid, else `false`.

___

### validOptions

▸ **validOptions**(`actual`: [SecondaryOptions](../interfaces/_defaults_.secondaryoptions.md)): boolean

*Defined in [lib/validation.ts:92](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L92)*

Validate optional secondary options of stylelint plugin config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | [SecondaryOptions](../interfaces/_defaults_.secondaryoptions.md) | The actual config to validate.  |

**Returns:** boolean

Returns `true` if secondary options are valied, else `false`.

___

### validProperties

▸ **validProperties**(`actual`: unknown): actual is IgnoreValue \| IgnoreValueList

*Defined in [lib/validation.ts:38](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/lib/validation.ts#L38)*

Validate primary options of stylelint plugin config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | unknown | The actual config to validate.  |

**Returns:** actual is IgnoreValue \| IgnoreValueList

Returns `true` if primary options are valid, else `false`.
