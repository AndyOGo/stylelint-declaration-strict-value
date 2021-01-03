[stylelint-declaration-strict-value - v1.7.7](../README.md) / [defaults](../modules/defaults.md) / SecondaryOptions

# Interface: SecondaryOptions

Plugin secondary options.

## Hierarchy

* **SecondaryOptions**

## Index

### Properties

* [autoFixFunc](defaults.secondaryoptions.md#autofixfunc)
* [disableFix](defaults.secondaryoptions.md#disablefix)
* [expandShorthand](defaults.secondaryoptions.md#expandshorthand)
* [ignoreFunctions](defaults.secondaryoptions.md#ignorefunctions)
* [ignoreKeywords](defaults.secondaryoptions.md#ignorekeywords)
* [ignoreValues](defaults.secondaryoptions.md#ignorevalues)
* [ignoreVariables](defaults.secondaryoptions.md#ignorevariables)
* [message](defaults.secondaryoptions.md#message)
* [recurseLonghand](defaults.secondaryoptions.md#recurselonghand)
* [severity](defaults.secondaryoptions.md#severity)

## Properties

### autoFixFunc

• `Optional` **autoFixFunc**: [*AutoFixFuncConfig*](../modules/defaults.md#autofixfuncconfig)

By default no auto-fix feature.

**`defaultvalue`** null

Defined in: [defaults.ts:178](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L178)

___

### disableFix

• `Optional` **disableFix**: *undefined* \| *boolean*

Don't auto-fix if `--fix` option is applied.

**`defaultvalue`** false

Defined in: [defaults.ts:171](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L171)

___

### expandShorthand

• `Optional` **expandShorthand**: *undefined* \| *boolean*

Whether or not to expand shorthand CSS properties.

**`defaultvalue`** false

Defined in: [defaults.ts:143](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L143)

___

### ignoreFunctions

• `Optional` **ignoreFunctions**: *undefined* \| *boolean* \| [*IgnoreVariableOrFunctionHash*](defaults.ignorevariableorfunctionhash.md)

Whether or not to ignore function.

**`defaultvalue`** true

Defined in: [defaults.ts:121](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L121)

___

### ignoreKeywords

• `Optional` **ignoreKeywords**: *undefined* \| *null* \| *string* \| *number* \| [*IgnoreValueHash*](defaults.ignorevaluehash.md) \| [*IgnoreValueList*](../modules/defaults.md#ignorevaluelist)

An ignored keywords config.

**`defaultvalue`** null

**`deprecated`** use `ignoreValues` option.

Defined in: [defaults.ts:129](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L129)

___

### ignoreValues

• `Optional` **ignoreValues**: *undefined* \| *null* \| *string* \| *number* \| [*IgnoreValueHash*](defaults.ignorevaluehash.md) \| [*IgnoreValueList*](../modules/defaults.md#ignorevaluelist)

An ignored values config.

**`defaultvalue`** null

Defined in: [defaults.ts:136](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L136)

___

### ignoreVariables

• `Optional` **ignoreVariables**: *undefined* \| *boolean* \| [*IgnoreVariableOrFunctionHash*](defaults.ignorevariableorfunctionhash.md)

Whether or not to ignore variables.

**`defaultvalue`** true

Defined in: [defaults.ts:114](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L114)

___

### message

• `Optional` **message**: *undefined* \| *string*

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

**`defaultvalue`** undefined

Defined in: [defaults.ts:164](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L164)

___

### recurseLonghand

• `Optional` **recurseLonghand**: *undefined* \| *boolean*

Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

**`defaultvalue`** false

Defined in: [defaults.ts:150](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L150)

___

### severity

• `Optional` **severity**: *undefined* \| *string*

Adjust severity of the rule, `'warning'` or `'error'` (default).

**`defaultvalue`** 'error'

Defined in: [defaults.ts:157](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/5625b4a/src/defaults.ts#L157)
