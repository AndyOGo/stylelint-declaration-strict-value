**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / ["defaults"](../modules/_defaults_.md) / ISecondaryOptions

# Interface: ISecondaryOptions

Plugin secondary options.

## Hierarchy

* **ISecondaryOptions**

## Index

### Properties

* [autoFixFunc](_defaults_.isecondaryoptions.md#autofixfunc)
* [disableFix](_defaults_.isecondaryoptions.md#disablefix)
* [expandShorthand](_defaults_.isecondaryoptions.md#expandshorthand)
* [ignoreFunctions](_defaults_.isecondaryoptions.md#ignorefunctions)
* [ignoreKeywords](_defaults_.isecondaryoptions.md#ignorekeywords)
* [ignoreValues](_defaults_.isecondaryoptions.md#ignorevalues)
* [ignoreVariables](_defaults_.isecondaryoptions.md#ignorevariables)
* [message](_defaults_.isecondaryoptions.md#message)
* [recurseLonghand](_defaults_.isecondaryoptions.md#recurselonghand)
* [severity](_defaults_.isecondaryoptions.md#severity)

## Properties

### autoFixFunc

• `Optional` **autoFixFunc**: [TAutoFixFuncConfig](../modules/_defaults_.md#tautofixfuncconfig)

*Defined in [defaults.ts:182](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L182)*

By default no auto-fix feature.

**`defaultvalue`** null

___

### disableFix

• `Optional` **disableFix**: undefined \| false \| true

*Defined in [defaults.ts:175](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L175)*

Don't auto-fix if `--fix` option is applied.

**`defaultvalue`** false

___

### expandShorthand

• `Optional` **expandShorthand**: undefined \| false \| true

*Defined in [defaults.ts:147](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L147)*

Whether or not to expand shorthand CSS properties.

**`defaultvalue`** false

___

### ignoreFunctions

• `Optional` **ignoreFunctions**: [TIgnoreVariableOrFunctionConfig](../modules/_defaults_.md#tignorevariableorfunctionconfig)

*Defined in [defaults.ts:125](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L125)*

Whether or not to ignore function.

**`defaultvalue`** true

___

### ignoreKeywords

• `Optional` **ignoreKeywords**: [TIgnoreValueConfig](../modules/_defaults_.md#tignorevalueconfig)

*Defined in [defaults.ts:133](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L133)*

An ignored keywords config.

**`defaultvalue`** null

**`deprecated`** use `ignoreValues` option.

___

### ignoreValues

• `Optional` **ignoreValues**: [TIgnoreValueConfig](../modules/_defaults_.md#tignorevalueconfig)

*Defined in [defaults.ts:140](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L140)*

An ignored values config.

**`defaultvalue`** null

___

### ignoreVariables

• `Optional` **ignoreVariables**: [TIgnoreVariableOrFunctionConfig](../modules/_defaults_.md#tignorevariableorfunctionconfig)

*Defined in [defaults.ts:118](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L118)*

Whether or not to ignore variables.

**`defaultvalue`** true

___

### message

• `Optional` **message**: undefined \| string

*Defined in [defaults.ts:168](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L168)*

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

**`defaultvalue`** undefined

___

### recurseLonghand

• `Optional` **recurseLonghand**: undefined \| false \| true

*Defined in [defaults.ts:154](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L154)*

Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

**`defaultvalue`** false

___

### severity

• `Optional` **severity**: undefined \| string

*Defined in [defaults.ts:161](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/46350e5/src/defaults.ts#L161)*

Adjust severity of the rule, `'warning'` or `'error'` (default).

**`defaultvalue`** 'error'
