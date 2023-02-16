[stylelint-declaration-strict-value - v1.9.2](../README.md) / lib/validation

# Module: lib/validation

## Table of contents

### Functions

- [customExpected](lib_validation.md#customexpected)
- [expected](lib_validation.md#expected)
- [expectedTypes](lib_validation.md#expectedtypes)
- [failedToFix](lib_validation.md#failedtofix)
- [getAutoFixFunc](lib_validation.md#getautofixfunc)
- [getIgnoredKeywords](lib_validation.md#getignoredkeywords)
- [getIgnoredValues](lib_validation.md#getignoredvalues)
- [getIgnoredVariablesOrFunctions](lib_validation.md#getignoredvariablesorfunctions)
- [getTypes](lib_validation.md#gettypes)
- [validOptions](lib_validation.md#validoptions)
- [validProperties](lib_validation.md#validproperties)

## Functions

### customExpected

▸ **customExpected**(`typesMessage`, `value`, `property`, `customMessage`): `string`

Build custom expected message for stylelint report.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typesMessage` | `string` | An expected types message for stylelint report. |
| `value` | `string` | The CSS declaration's value. |
| `property` | `string` | The CSS declaration's property. |
| `customMessage` | `string` | A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`. |

#### Returns

`string`

Returns a custom expected message for stylelint report.

#### Defined in

[lib/validation.ts:241](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L241)

___

### expected

▸ **expected**(`typesMessage`, `value`, `property`): `string`

Build expected message for stylelint report.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `typesMessage` | `string` | An expected types message for stylelint report. |
| `value` | `string` | The CSS declaration's value. |
| `property` | `string` | The CSS declaration's property. |

#### Returns

`string`

Returns an expected message for stylelint report.

#### Defined in

[lib/validation.ts:222](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L222)

___

### expectedTypes

▸ **expectedTypes**(`types`): `string`

Build expected message for stylelint report.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `types` | `ExpectedType` \| `ExpectedTypes` | Either `variable`, `function` and/or `keyword`. |

#### Returns

`string`

Returns an expected types message for stylelint report.

#### Defined in

[lib/validation.ts:195](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L195)

___

### failedToFix

▸ **failedToFix**(`error`, `value`, `property`): `string`

Build failed-to-fix message for stylelint report.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `unknown` | An expression to `throw`. |
| `value` | `string` | The CSS declaration's value. |
| `property` | `string` | The CSS declaration's property. |

#### Returns

`string`

Returns an failed-to-fix message for stylelint report.

#### Defined in

[lib/validation.ts:265](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L265)

___

### getAutoFixFunc

▸ **getAutoFixFunc**(`autoFixFunc`, `disableFix?`, `contextFix?`): ``null`` \| [`AutoFixFunc`](defaults.md#autofixfunc)

Get the auto-fix function either by a function directly or from a source file.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `autoFixFunc` | [`AutoFixFuncConfig`](defaults.md#autofixfuncconfig) | A JavaScript function or a module path to resolve it, also from `cwd`. |
| `disableFix?` | `boolean` | - |
| `contextFix?` | `boolean` | - |

#### Returns

``null`` \| [`AutoFixFunc`](defaults.md#autofixfunc)

Returns the auto-fix function if found, else `null`.

#### Defined in

[lib/validation.ts:410](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L410)

___

### getIgnoredKeywords

▸ **getIgnoredKeywords**(`ignoreKeywords`, `property`): ``null`` \| [`IgnoreValueList`](defaults.md#ignorevaluelist)

Get the correct ignored keywords for a specific CSS declaration's property
out of a complex `ignoreKeywords` config hash or array.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ignoreKeywords` | [`IgnoreValueConfig`](defaults.md#ignorevalueconfig) | The keyword/-s to ignore. |
| `property` | `string` | The specific CSS declaration's property of the current iteration. |

#### Returns

``null`` \| [`IgnoreValueList`](defaults.md#ignorevaluelist)

Returns ignored keywords for a specific CSS property, or `null`.

#### Defined in

[lib/validation.ts:359](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L359)

___

### getIgnoredValues

▸ **getIgnoredValues**(`ignoreValues`, `property`): ``null`` \| [`IgnoreValueList`](defaults.md#ignorevaluelist)

Get the correct ignored values for a specific CSS declaration's property
out of a complex `ignoreValues` config hash or array.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ignoreValues` | [`IgnoreValueConfig`](defaults.md#ignorevalueconfig) | The values/-s to ignore. |
| `property` | `string` | The specific CSS declaration's property of the current iteration. |

#### Returns

``null`` \| [`IgnoreValueList`](defaults.md#ignorevaluelist)

Returns ignored values for a specific CSS property, or `null`.

#### Defined in

[lib/validation.ts:385](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L385)

___

### getIgnoredVariablesOrFunctions

▸ **getIgnoredVariablesOrFunctions**(`ignoreVariablesOrFunctions`, `property`): `boolean`

Get the correct ignored variable or function for a specific CSS declaration's property
out of a complex `ignoreVariablesOrFunctions` config hash or boolean.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ignoreVariablesOrFunctions` | [`IgnoreVariableOrFunctionConfig`](defaults.md#ignorevariableorfunctionconfig) | The variables or functions to ignore. |
| `property` | `string` | The specific CSS declaration's property of the current iteration. |

#### Returns

`boolean`

Returns ignored variable or function for a specific CSS property.

#### Defined in

[lib/validation.ts:327](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L327)

___

### getTypes

▸ **getTypes**(`config`, `property`): `ExpectedTypes`

Get configured types for stylelint report message.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md) | The secondary stylelint-plugin config. |
| `property` | `string` | The specific CSS declaration's property of the current iteration. |

#### Returns

`ExpectedTypes`

Returns a list of configured types.

#### Defined in

[lib/validation.ts:286](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L286)

___

### validOptions

▸ **validOptions**(`actual`): `boolean`

Validate optional secondary options of stylelint plugin config.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actual` | [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md) | The actual config to validate. |

#### Returns

`boolean`

Returns `true` if secondary options are valid, else `false`.

#### Defined in

[lib/validation.ts:93](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L93)

___

### validProperties

▸ **validProperties**(`actual`): actual is IgnoreValue \| IgnoreValueList

Validate primary options of stylelint plugin config.

**`internal`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actual` | `unknown` | The actual config to validate. |

#### Returns

actual is IgnoreValue \| IgnoreValueList

Returns `true` if primary options are valid, else `false`.

#### Defined in

[lib/validation.ts:39](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b5739c9/src/lib/validation.ts#L39)
