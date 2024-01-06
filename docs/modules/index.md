[stylelint-declaration-strict-value - v1.10.3](../README.md) / index

# Module: index

## Table of contents

### References

- [ruleName](index.md#rulename)

### Namespaces

- [rule](index.rule.md)

### Variables

- [default](index.md#default)
- [messages](index.md#messages)
- [rule](index.md#rule)

## References

### ruleName

Re-exports [ruleName](defaults.md#rulename)

## Variables

### default

• **default**: `Plugin`

#### Defined in

[index.ts:496](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/a2f4937/src/index.ts#L496)

___

### messages

• **messages**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `customExpected` | (`typesMessage`: `string`, `value`: `string`, `property`: `string`, `customMessage`: `string`) => `string` |
| `expected` | (`typesMessage`: `string`, `value`: `string`, `property`: `string`) => `string` |
| `failedToFix` | (`error`: `unknown`, `value`: `string`, `property`: `string`) => `string` |

#### Defined in

[index.ts:31](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/a2f4937/src/index.ts#L31)

___

### rule

• **rule**: `StylelintPlugin`<`PrimaryOptions`, [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md)\>

#### Defined in

[index.ts:148](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/a2f4937/src/index.ts#L148)
