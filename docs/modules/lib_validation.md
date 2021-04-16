[stylelint-declaration-strict-value - v1.7.12](../README.md) / lib/validation

# Module: lib/validation

## Index

### Functions

* [expected](lib_validation.md#expected)
* [getAutoFixFunc](lib_validation.md#getautofixfunc)
* [getIgnoredKeywords](lib_validation.md#getignoredkeywords)
* [getIgnoredValues](lib_validation.md#getignoredvalues)
* [getIgnoredVariablesOrFunctions](lib_validation.md#getignoredvariablesorfunctions)
* [getTypes](lib_validation.md#gettypes)
* [validOptions](lib_validation.md#validoptions)
* [validProperties](lib_validation.md#validproperties)

## Functions

### expected

▸ **expected**(`types`: *function* \| *variable* \| *keyword* \| ExpectedTypes, `value`: *string*, `property`: *string*, `customMessage?`: *string*): *string*

Build expected message for stylelint report.

**`internal`** 

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`types` | *function* \| *variable* \| *keyword* \| ExpectedTypes | - | Either `variable`, `function` and/or `keyword`.   |
`value` | *string* | - | The CSS declaration's value.   |
`property` | *string* | - | The CSS declaration's property.   |
`customMessage` | *string* | '' | A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`.    |

**Returns:** *string*

Returns an expected message for stylelint report.

Defined in: [lib/validation.ts:198](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/lib/validation.ts#L198)

___

### getAutoFixFunc

▸ **getAutoFixFunc**(`autoFixFunc`: [*AutoFixFuncConfig*](defaults.md#autofixfuncconfig), `disableFix?`: *boolean*, `contextFix?`: *boolean*): *null* \| [*AutoFixFunc*](defaults.md#autofixfunc)

Get the auto-fix function either by a function directly or from a source file.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`autoFixFunc` | [*AutoFixFuncConfig*](defaults.md#autofixfuncconfig) | A JavaScript function or a module path to resolve it, also from `cwd`.    |
`disableFix?` | *boolean* | - |
`contextFix?` | *boolean* | - |

**Returns:** *null* \| [*AutoFixFunc*](defaults.md#autofixfunc)

Returns the auto-fix function if found, else `null`.

Defined in: [lib/validation.ts:366](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/lib/validation.ts#L366)

___

### getIgnoredKeywords

▸ **getIgnoredKeywords**(`ignoreKeywords`: [*IgnoreValueConfig*](defaults.md#ignorevalueconfig), `property`: *string*): *null* \| [*IgnoreValueList*](defaults.md#ignorevaluelist)

Get the correct ignored keywords for a specific CSS declaration's property
out of a complex `ignoreKeywords` config hash or array.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreKeywords` | [*IgnoreValueConfig*](defaults.md#ignorevalueconfig) | The keyword/-s to ignore.   |
`property` | *string* | The specific CSS declaration's property of the current iteration.    |

**Returns:** *null* \| [*IgnoreValueList*](defaults.md#ignorevaluelist)

Returns ignored keywords for a specific CSS property, or `null`.

Defined in: [lib/validation.ts:315](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/lib/validation.ts#L315)

___

### getIgnoredValues

▸ **getIgnoredValues**(`ignoreValues`: [*IgnoreValueConfig*](defaults.md#ignorevalueconfig), `property`: *string*): *null* \| [*IgnoreValueList*](defaults.md#ignorevaluelist)

Get the correct ignored values for a specific CSS declaration's property
out of a complex `ignoreValues` config hash or array.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreValues` | [*IgnoreValueConfig*](defaults.md#ignorevalueconfig) | The values/-s to ignore.   |
`property` | *string* | The specific CSS declaration's property of the current iteration.   |

**Returns:** *null* \| [*IgnoreValueList*](defaults.md#ignorevaluelist)

Returns ignored values for a specific CSS property, or `null`.

Defined in: [lib/validation.ts:341](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/lib/validation.ts#L341)

___

### getIgnoredVariablesOrFunctions

▸ **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`: [*IgnoreVariableOrFunctionConfig*](defaults.md#ignorevariableorfunctionconfig), `property`: *string*): *boolean*

Get the correct ignored variable or function for a specific CSS declaration's property
out of a complex `ignoreVariablesOrFunctions` config hash or boolean.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreVariablesOrFunctions` | [*IgnoreVariableOrFunctionConfig*](defaults.md#ignorevariableorfunctionconfig) | The variables or functions to ignore.   |
`property` | *string* | The specific CSS declaration's property of the current iteration.    |

**Returns:** *boolean*

Returns ignored variable or function for a specific CSS property.

Defined in: [lib/validation.ts:283](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/lib/validation.ts#L283)

___

### getTypes

▸ **getTypes**(`config`: [*SecondaryOptions*](../interfaces/defaults.secondaryoptions.md), `property`: *string*): ExpectedTypes

Get configured types for stylelint report message.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`config` | [*SecondaryOptions*](../interfaces/defaults.secondaryoptions.md) | The secondary stylelint-plugin config.   |
`property` | *string* | The specific CSS declaration's property of the current iteration.    |

**Returns:** ExpectedTypes

Returns a list of configured types.

Defined in: [lib/validation.ts:238](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/lib/validation.ts#L238)

___

### validOptions

▸ **validOptions**(`actual`: [*SecondaryOptions*](../interfaces/defaults.secondaryoptions.md)): *boolean*

Validate optional secondary options of stylelint plugin config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | [*SecondaryOptions*](../interfaces/defaults.secondaryoptions.md) | The actual config to validate.    |

**Returns:** *boolean*

Returns `true` if secondary options are valid, else `false`.

Defined in: [lib/validation.ts:93](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/lib/validation.ts#L93)

___

### validProperties

▸ **validProperties**(`actual`: *unknown*): actual is string \| number \| IgnoreValueList

Validate primary options of stylelint plugin config.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`actual` | *unknown* | The actual config to validate.    |

**Returns:** actual is string \| number \| IgnoreValueList

Returns `true` if primary options are valid, else `false`.

Defined in: [lib/validation.ts:39](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/lib/validation.ts#L39)
