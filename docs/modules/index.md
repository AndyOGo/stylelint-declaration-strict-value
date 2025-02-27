[stylelint-declaration-strict-value - v1.10.9](../README.md) / index

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

[index.ts:504](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/695b5ea/src/index.ts#L504)

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

[index.ts:38](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/695b5ea/src/index.ts#L38)

___

### meta

• **meta**: `RuleMeta`

#### Defined in

[index.ts:34](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/695b5ea/src/index.ts#L34)

___

### rule

• **rule**: `StylelintPlugin`<`PrimaryOptions`, [`SecondaryOptions`](../interfaces/defaults.SecondaryOptions.md)\>

#### Defined in

[index.ts:155](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/695b5ea/src/index.ts#L155)
