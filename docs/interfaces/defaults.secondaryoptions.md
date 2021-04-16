[stylelint-declaration-strict-value - v1.7.12](../README.md) / [defaults](../modules/defaults.md) / SecondaryOptions

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

Defined in: [defaults.ts:183](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L183)

___

### disableFix

• `Optional` **disableFix**: *undefined* \| *boolean*

Don't auto-fix if `--fix` option is applied.

**`defaultvalue`** false

Defined in: [defaults.ts:176](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L176)

___

### expandShorthand

• `Optional` **expandShorthand**: *undefined* \| *boolean*

Whether or not to expand shorthand CSS properties.

**`defaultvalue`** false

Defined in: [defaults.ts:148](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L148)

___

### ignoreFunctions

• `Optional` **ignoreFunctions**: *undefined* \| *boolean* \| [*IgnoreVariableOrFunctionHash*](defaults.ignorevariableorfunctionhash.md)

Whether or not to ignore function.

**`defaultvalue`** true

Defined in: [defaults.ts:126](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L126)

___

### ignoreKeywords

• `Optional` **ignoreKeywords**: *undefined* \| *null* \| *string* \| *number* \| [*IgnoreValueHash*](defaults.ignorevaluehash.md) \| [*IgnoreValueList*](../modules/defaults.md#ignorevaluelist)

An ignored keywords config.

**`defaultvalue`** null

**`deprecated`** use `ignoreValues` option.

Defined in: [defaults.ts:134](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L134)

___

### ignoreValues

• `Optional` **ignoreValues**: *undefined* \| *null* \| *string* \| *number* \| [*IgnoreValueHash*](defaults.ignorevaluehash.md) \| [*IgnoreValueList*](../modules/defaults.md#ignorevaluelist)

An ignored values config.

**`defaultvalue`** null

Defined in: [defaults.ts:141](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L141)

___

### ignoreVariables

• `Optional` **ignoreVariables**: *undefined* \| *boolean* \| [*IgnoreVariableOrFunctionHash*](defaults.ignorevariableorfunctionhash.md)

Whether or not to ignore variables.

**`defaultvalue`** true

Defined in: [defaults.ts:119](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L119)

___

### message

• `Optional` **message**: *undefined* \| *string*

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

**`defaultvalue`** undefined

Defined in: [defaults.ts:169](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L169)

___

### recurseLonghand

• `Optional` **recurseLonghand**: *undefined* \| *boolean*

Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

**`defaultvalue`** false

Defined in: [defaults.ts:155](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L155)

___

### severity

• `Optional` **severity**: *undefined* \| *string*

Adjust severity of the rule, `'warning'` or `'error'` (default).

**`defaultvalue`** 'error'

Defined in: [defaults.ts:162](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/754dccc/src/defaults.ts#L162)
