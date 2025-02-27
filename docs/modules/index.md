[stylelint-declaration-strict-value - v1.10.10](../README.md) / index

# Module: index

## Table of contents

### References

- [ruleName](index.md#rulename)

### Namespaces

- [rule](index.rule.md)

### Variables

- [default](index.md#default)
- [messages](index.md#messages)
- [meta](index.md#meta)
- [rule](index.md#rule)

## References

### ruleName

Re-exports [ruleName](defaults.md#rulename)

## Variables

### default

• **default**: `Plugin`

#### Defined in

[index.ts:502](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/72a93c2/src/index.ts#L502)

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

[index.ts:36](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/72a93c2/src/index.ts#L36)

___

### meta

• **meta**: `RuleMeta`

#### Defined in

[index.ts:32](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/72a93c2/src/index.ts#L32)

___

### rule

• **rule**: `StylelintPlugin`<`PrimaryOptions`, [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md)\>

#### Defined in

[index.ts:153](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/72a93c2/src/index.ts#L153)
