[**stylelint-declaration-strict-value v1.11.1**](../../README.md)

***

[stylelint-declaration-strict-value](../../README.md) / [defaults](../README.md) / SecondaryOptions

# Interface: SecondaryOptions

Defined in: [defaults.ts:113](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L113)

Plugin secondary options.

## Properties

### autoFixFunc?

> `optional` **autoFixFunc**: [`AutoFixFuncConfig`](../type-aliases/AutoFixFuncConfig.md)

Defined in: [defaults.ts:183](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L183)

By default no auto-fix feature.

#### Default Value

```ts
null
```

***

### disableFix?

> `optional` **disableFix**: `boolean`

Defined in: [defaults.ts:176](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L176)

Don't auto-fix if `--fix` option is applied.

#### Default Value

```ts
false
```

***

### expandShorthand?

> `optional` **expandShorthand**: `boolean`

Defined in: [defaults.ts:148](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L148)

Whether or not to expand shorthand CSS properties.

#### Default Value

```ts
false
```

***

### ignoreFunctions?

> `optional` **ignoreFunctions**: [`IgnoreVariableOrFunctionConfig`](../type-aliases/IgnoreVariableOrFunctionConfig.md)

Defined in: [defaults.ts:126](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L126)

Whether or not to ignore function.

#### Default Value

```ts
true
```

***

### ~~ignoreKeywords?~~

> `optional` **ignoreKeywords**: [`IgnoreValueConfig`](../type-aliases/IgnoreValueConfig.md)

Defined in: [defaults.ts:134](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L134)

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

Defined in: [defaults.ts:141](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L141)

An ignored values config.

#### Default Value

```ts
null
```

***

### ignoreVariables?

> `optional` **ignoreVariables**: [`IgnoreVariableOrFunctionConfig`](../type-aliases/IgnoreVariableOrFunctionConfig.md)

Defined in: [defaults.ts:119](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L119)

Whether or not to ignore variables.

#### Default Value

```ts
true
```

***

### message?

> `optional` **message**: `string`

Defined in: [defaults.ts:169](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L169)

A custom message when a rule is violated, interpolated with `${types}`, `${value}` and `${property}`.

#### Default Value

```ts
undefined
```

***

### recurseLonghand?

> `optional` **recurseLonghand**: `boolean`

Defined in: [defaults.ts:155](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L155)

Whether or not to expand longhand CSS properties recursivly - this is only useful for the `border` property.

#### Default Value

```ts
false
```

***

### severity?

> `optional` **severity**: `string`

Defined in: [defaults.ts:162](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/b2f09cb0cb459f8f7c48d3e7b8ec509b91d7bb4f/src/defaults.ts#L162)

Adjust severity of the rule, `'warning'` or `'error'` (default).

#### Default Value

```ts
'error'
```
