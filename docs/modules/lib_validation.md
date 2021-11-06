[stylelint-declaration-strict-value - v1.8.0](../README.md) / lib/validation

# Module: lib/validation

## Table of contents

### Functions

- [expected](lib_validation.md#expected)
- [getAutoFixFunc](lib_validation.md#getautofixfunc)
- [getIgnoredKeywords](lib_validation.md#getignoredkeywords)
- [getIgnoredValues](lib_validation.md#getignoredvalues)
- [getIgnoredVariablesOrFunctions](lib_validation.md#getignoredvariablesorfunctions)
- [getTypes](lib_validation.md#gettypes)
- [validOptions](lib_validation.md#validoptions)
- [validProperties](lib_validation.md#validproperties)

## Functions

### expected

▸ **expected**(`types`, `value`, `property`, `customMessage?`): `string`

Build expected message for stylelint report.

**`internal`**

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `types` | `ExpectedType` \| `ExpectedTypes` | `undefined` | Either `variable`, `function` and/or `keyword`. |
| `value` | `string` | `undefined` | The CSS declaration's value. |
| `property` | `string` | `undefined` | The CSS declaration's property. |
| `customMessage` | `string` | `''` | A custom message to be delivered upon error interpolated with `${types}`, `${value}` and `${property}`. |

#### Returns

`string`

Returns an expected message for stylelint report.

#### Defined in

[src/lib/validation.ts:198](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/lib/validation.ts#L198)

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

[src/lib/validation.ts:362](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/lib/validation.ts#L362)

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

[src/lib/validation.ts:311](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/lib/validation.ts#L311)

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

[src/lib/validation.ts:337](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/lib/validation.ts#L337)

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

[src/lib/validation.ts:279](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/lib/validation.ts#L279)

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

[src/lib/validation.ts:238](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/lib/validation.ts#L238)

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

[src/lib/validation.ts:93](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/lib/validation.ts#L93)

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

[src/lib/validation.ts:39](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/lib/validation.ts#L39)
