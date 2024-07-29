[stylelint-declaration-strict-value - v1.10.5](../README.md) / index

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

[index.ts:501](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/ed9d4e2/src/index.ts#L501)

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

[index.ts:35](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/ed9d4e2/src/index.ts#L35)

___

### meta

• **meta**: `RuleMeta`

#### Defined in

[index.ts:31](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/ed9d4e2/src/index.ts#L31)

___

### rule

• **rule**: `StylelintPlugin`<`PrimaryOptions`, [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md)\>

#### Defined in

[index.ts:152](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/ed9d4e2/src/index.ts#L152)
