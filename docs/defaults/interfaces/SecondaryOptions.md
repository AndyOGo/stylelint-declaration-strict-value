[**stylelint-declaration-strict-value v1.12.1**](../../README.md)

***

[stylelint-declaration-strict-value](../../README.md) / [defaults](../README.md) / SecondaryOptions

# Interface: SecondaryOptions

Defined in: [defaults.ts:144](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L144)

Plugin secondary options.

## Properties

### autoFixFunc?

> `optional` **autoFixFunc**: [`AutoFixFuncConfig`](../type-aliases/AutoFixFuncConfig.md)

Defined in: [defaults.ts:221](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L221)

By default no auto-fix feature.

#### Default Value

```ts
null
```

***

### disableFix?

> `optional` **disableFix**: `boolean`

Defined in: [defaults.ts:214](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L214)

Don't auto-fix if `--fix` option is applied.

#### Default Value

```ts
false
```

***

### expandShorthand?

> `optional` **expandShorthand**: `boolean`

Defined in: [defaults.ts:186](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L186)

Whether or not to expand shorthand CSS properties.

#### Default Value

```ts
false
```

***

### ignoreAtRules?

> `optional` **ignoreAtRules**: [`IgnoreAtRuleConfig`](../type-aliases/IgnoreAtRuleConfig.md)

Defined in: [defaults.ts:179](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L179)

An ignored at-rules config.

#### Default Value

```ts
null
```

***

### ignoreFunctions?

> `optional` **ignoreFunctions**: [`IgnoreVariableOrFunctionConfig`](../type-aliases/IgnoreVariableOrFunctionConfig.md)

Defined in: [defaults.ts:157](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L157)

Whether or not to ignore function.

#### Default Value

```ts
true
```

***

### ~~ignoreKeywords?~~

> `optional` **ignoreKeywords**: [`IgnoreValueConfig`](../type-aliases/IgnoreValueConfig.md)

Defined in: [defaults.ts:165](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L165)

An ignored keywords config.

#### Default Value

```ts
null
```

#### Deprecated

use `ignoreValues` option.

***

### ignoreValues?

> `optional` **ignoreValues**: [`IgnoreValueConfig`](../type-aliases/IgnoreValueConfig.md)

Defined in: [defaults.ts:172](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L172)

An ignored values config.

#### Default Value

```ts
null
```

***

### ignoreVariables?

> `optional` **ignoreVariables**: [`IgnoreVariableOrFunctionConfig`](../type-aliases/IgnoreVariableOrFunctionConfig.md)

Defined in: [defaults.ts:150](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L150)

Whether or not to ignore variables.

#### Default Value

```ts
true
```

***

### message?

> `optional` **message**: `string`

Defined in: [defaults.ts:207](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L207)

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

#### Default Value

```ts
undefined
```

***

### recurseLonghand?

> `optional` **recurseLonghand**: `boolean`

Defined in: [defaults.ts:193](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L193)

Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

#### Default Value

```ts
false
```

***

### severity?

> `optional` **severity**: `string`

Defined in: [defaults.ts:200](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/c9b77b2c496c17f74da6b337166fdf3b245b026b/src/defaults.ts#L200)

Adjust severity of the rule, `'warning'` or `'error'` (default).

#### Default Value

```ts
'error'
```
