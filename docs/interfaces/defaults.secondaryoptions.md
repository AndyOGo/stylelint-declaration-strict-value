[stylelint-declaration-strict-value - v1.8.0](../README.md) / [defaults](../modules/defaults.md) / SecondaryOptions

# Interface: SecondaryOptions

[defaults](../modules/defaults.md).SecondaryOptions

Plugin secondary options.

## Table of contents

### Properties

- [autoFixFunc](defaults.SecondaryOptions.md#autofixfunc)
- [disableFix](defaults.SecondaryOptions.md#disablefix)
- [expandShorthand](defaults.SecondaryOptions.md#expandshorthand)
- [ignoreFunctions](defaults.SecondaryOptions.md#ignorefunctions)
- [ignoreKeywords](defaults.SecondaryOptions.md#ignorekeywords)
- [ignoreValues](defaults.SecondaryOptions.md#ignorevalues)
- [ignoreVariables](defaults.SecondaryOptions.md#ignorevariables)
- [message](defaults.SecondaryOptions.md#message)
- [recurseLonghand](defaults.SecondaryOptions.md#recurselonghand)
- [severity](defaults.SecondaryOptions.md#severity)

## Properties

### autoFixFunc

• `Optional` **autoFixFunc**: [`AutoFixFuncConfig`](../modules/defaults.md#autofixfuncconfig)

By default no auto-fix feature.

**`defaultvalue`** null

#### Defined in

[src/defaults.ts:183](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L183)

___

### disableFix

• `Optional` **disableFix**: `boolean`

Don't auto-fix if `--fix` option is applied.

**`defaultvalue`** false

#### Defined in

[src/defaults.ts:176](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L176)

___

### expandShorthand

• `Optional` **expandShorthand**: `boolean`

Whether or not to expand shorthand CSS properties.

**`defaultvalue`** false

#### Defined in

[src/defaults.ts:148](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L148)

___

### ignoreFunctions

• `Optional` **ignoreFunctions**: [`IgnoreVariableOrFunctionConfig`](../modules/defaults.md#ignorevariableorfunctionconfig)

Whether or not to ignore function.

**`defaultvalue`** true

#### Defined in

[src/defaults.ts:126](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L126)

___

### ignoreKeywords

• `Optional` **ignoreKeywords**: [`IgnoreValueConfig`](../modules/defaults.md#ignorevalueconfig)

An ignored keywords config.

**`defaultvalue`** null

**`deprecated`** use `ignoreValues` option.

#### Defined in

[src/defaults.ts:134](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L134)

___

### ignoreValues

• `Optional` **ignoreValues**: [`IgnoreValueConfig`](../modules/defaults.md#ignorevalueconfig)

An ignored values config.

**`defaultvalue`** null

#### Defined in

[src/defaults.ts:141](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L141)

___

### ignoreVariables

• `Optional` **ignoreVariables**: [`IgnoreVariableOrFunctionConfig`](../modules/defaults.md#ignorevariableorfunctionconfig)

Whether or not to ignore variables.

**`defaultvalue`** true

#### Defined in

[src/defaults.ts:119](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L119)

___

### message

• `Optional` **message**: `string`

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

**`defaultvalue`** undefined

#### Defined in

[src/defaults.ts:169](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L169)

___

### recurseLonghand

• `Optional` **recurseLonghand**: `boolean`

Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

**`defaultvalue`** false

#### Defined in

[src/defaults.ts:155](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L155)

___

### severity

• `Optional` **severity**: `string`

Adjust severity of the rule, `'warning'` or `'error'` (default).

**`defaultvalue`** 'error'

#### Defined in

[src/defaults.ts:162](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/16795d3/src/defaults.ts#L162)
