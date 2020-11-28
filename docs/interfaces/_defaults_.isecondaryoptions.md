**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / ["defaults"](../modules/_defaults_.md) / ISecondaryOptions

# Interface: ISecondaryOptions

Plugin secondary options.

**`internal`** 

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

• `Optional` **autoFixFunc**: [TAutoFixFuncOrPath](../modules/_defaults_.md#tautofixfuncorpath)

*Defined in [defaults.ts:109](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L109)*

By default no auto-fix feature.

**`defaultvalue`** null

___

### disableFix

• `Optional` **disableFix**: undefined \| false \| true

*Defined in [defaults.ts:102](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L102)*

Don't auto-fix if `--fix` option is applied.

**`defaultvalue`** false

___

### expandShorthand

• `Optional` **expandShorthand**: undefined \| false \| true

*Defined in [defaults.ts:74](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L74)*

Wheter or not to expand shorthand CSS properties.

**`defaultvalue`** false

___

### ignoreFunctions

• `Optional` **ignoreFunctions**: [IBoolOption](../modules/_defaults_.md#ibooloption)

*Defined in [defaults.ts:52](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L52)*

Wheter or not to ignore function.

**`defaultvalue`** true

___

### ignoreKeywords

• `Optional` **ignoreKeywords**: null \| [TOption](../modules/_defaults_.md#toption)

*Defined in [defaults.ts:60](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L60)*

An ignored keywords config.

**`defaultvalue`** null

**`deprecated`** use `ignoreValues` option.

___

### ignoreValues

• `Optional` **ignoreValues**: null \| [TOption](../modules/_defaults_.md#toption)

*Defined in [defaults.ts:67](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L67)*

An ignored values config.

**`defaultvalue`** null

___

### ignoreVariables

• `Optional` **ignoreVariables**: [IBoolOption](../modules/_defaults_.md#ibooloption)

*Defined in [defaults.ts:45](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L45)*

Wheter or not to ignore variables.

**`defaultvalue`** true

___

### message

• `Optional` **message**: undefined \| string

*Defined in [defaults.ts:95](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L95)*

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

**`defaultvalue`** undefined

___

### recurseLonghand

• `Optional` **recurseLonghand**: undefined \| false \| true

*Defined in [defaults.ts:81](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L81)*

Wheter or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

**`defaultvalue`** false

___

### severity

• `Optional` **severity**: undefined \| string

*Defined in [defaults.ts:88](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/defaults.ts#L88)*

Adjust severity of the rule, `'warning'` or `'error'` (default).

**`defaultvalue`** 'error'
