[**stylelint-declaration-strict-value v1.12.0**](../../README.md)

***

[stylelint-declaration-strict-value](../../README.md) / [defaults](../README.md) / SecondaryOptions

# Interface: SecondaryOptions

Defined in: [defaults.ts:143](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L143)

Plugin secondary options.

## Properties

### autoFixFunc?

> `optional` **autoFixFunc**: [`AutoFixFuncConfig`](../type-aliases/AutoFixFuncConfig.md)

Defined in: [defaults.ts:220](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L220)

By default no auto-fix feature.

#### Default Value

```ts
null
```

***

### disableFix?

> `optional` **disableFix**: `boolean`

Defined in: [defaults.ts:213](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L213)

Don't auto-fix if `--fix` option is applied.

#### Default Value

```ts
false
```

***

### expandShorthand?

> `optional` **expandShorthand**: `boolean`

Defined in: [defaults.ts:185](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L185)

Whether or not to expand shorthand CSS properties.

#### Default Value

```ts
false
```

***

### ignoreAtRules?

> `optional` **ignoreAtRules**: [`IgnoreAtRuleConfig`](../type-aliases/IgnoreAtRuleConfig.md)

Defined in: [defaults.ts:178](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L178)

An ignored at-rules config.

#### Default Value

```ts
null
```

***

### ignoreFunctions?

> `optional` **ignoreFunctions**: [`IgnoreVariableOrFunctionConfig`](../type-aliases/IgnoreVariableOrFunctionConfig.md)

Defined in: [defaults.ts:156](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L156)

Whether or not to ignore function.

#### Default Value

```ts
true
```

***

### ~~ignoreKeywords?~~

> `optional` **ignoreKeywords**: [`IgnoreValueConfig`](../type-aliases/IgnoreValueConfig.md)

Defined in: [defaults.ts:164](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L164)

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

Defined in: [defaults.ts:171](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L171)

An ignored values config.

#### Default Value

```ts
null
```

***

### ignoreVariables?

> `optional` **ignoreVariables**: [`IgnoreVariableOrFunctionConfig`](../type-aliases/IgnoreVariableOrFunctionConfig.md)

Defined in: [defaults.ts:149](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L149)

Whether or not to ignore variables.

#### Default Value

```ts
true
```

***

### message?

> `optional` **message**: `string`

Defined in: [defaults.ts:206](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L206)

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

#### Default Value

```ts
undefined
```

***

### recurseLonghand?

> `optional` **recurseLonghand**: `boolean`

Defined in: [defaults.ts:192](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L192)

Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

#### Default Value

```ts
false
```

***

### severity?

> `optional` **severity**: `string`

Defined in: [defaults.ts:199](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/7ebdf9b929e2eacc9832b5063e906bf2a4332035/src/defaults.ts#L199)

Adjust severity of the rule, `'warning'` or `'error'` (default).

#### Default Value

```ts
'error'
```
