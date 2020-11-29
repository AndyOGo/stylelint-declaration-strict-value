**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / ["defaults"](../modules/_defaults_.md) / SecondaryOptions

# Interface: SecondaryOptions

Plugin secondary options.

## Hierarchy

* **SecondaryOptions**

## Index

### Properties

* [autoFixFunc](_defaults_.secondaryoptions.md#autofixfunc)
* [disableFix](_defaults_.secondaryoptions.md#disablefix)
* [expandShorthand](_defaults_.secondaryoptions.md#expandshorthand)
* [ignoreFunctions](_defaults_.secondaryoptions.md#ignorefunctions)
* [ignoreKeywords](_defaults_.secondaryoptions.md#ignorekeywords)
* [ignoreValues](_defaults_.secondaryoptions.md#ignorevalues)
* [ignoreVariables](_defaults_.secondaryoptions.md#ignorevariables)
* [message](_defaults_.secondaryoptions.md#message)
* [recurseLonghand](_defaults_.secondaryoptions.md#recurselonghand)
* [severity](_defaults_.secondaryoptions.md#severity)

## Properties

### autoFixFunc

• `Optional` **autoFixFunc**: [AutoFixFuncConfig](../modules/_defaults_.md#autofixfuncconfig)

*Defined in [defaults.ts:178](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L178)*

By default no auto-fix feature.

**`defaultvalue`** null

___

### disableFix

• `Optional` **disableFix**: undefined \| false \| true

*Defined in [defaults.ts:171](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L171)*

Don't auto-fix if `--fix` option is applied.

**`defaultvalue`** false

___

### expandShorthand

• `Optional` **expandShorthand**: undefined \| false \| true

*Defined in [defaults.ts:143](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L143)*

Whether or not to expand shorthand CSS properties.

**`defaultvalue`** false

___

### ignoreFunctions

• `Optional` **ignoreFunctions**: [IgnoreVariableOrFunctionConfig](../modules/_defaults_.md#ignorevariableorfunctionconfig)

*Defined in [defaults.ts:121](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L121)*

Whether or not to ignore function.

**`defaultvalue`** true

___

### ignoreKeywords

• `Optional` **ignoreKeywords**: [IgnoreValueConfig](../modules/_defaults_.md#ignorevalueconfig)

*Defined in [defaults.ts:129](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L129)*

An ignored keywords config.

**`defaultvalue`** null

**`deprecated`** use `ignoreValues` option.

___

### ignoreValues

• `Optional` **ignoreValues**: [IgnoreValueConfig](../modules/_defaults_.md#ignorevalueconfig)

*Defined in [defaults.ts:136](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L136)*

An ignored values config.

**`defaultvalue`** null

___

### ignoreVariables

• `Optional` **ignoreVariables**: [IgnoreVariableOrFunctionConfig](../modules/_defaults_.md#ignorevariableorfunctionconfig)

*Defined in [defaults.ts:114](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L114)*

Whether or not to ignore variables.

**`defaultvalue`** true

___

### message

• `Optional` **message**: undefined \| string

*Defined in [defaults.ts:164](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L164)*

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

**`defaultvalue`** undefined

___

### recurseLonghand

• `Optional` **recurseLonghand**: undefined \| false \| true

*Defined in [defaults.ts:150](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L150)*

Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

**`defaultvalue`** false

___

### severity

• `Optional` **severity**: undefined \| string

*Defined in [defaults.ts:157](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/64c5885/src/defaults.ts#L157)*

Adjust severity of the rule, `'warning'` or `'error'` (default).

**`defaultvalue`** 'error'
