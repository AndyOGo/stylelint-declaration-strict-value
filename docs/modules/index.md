[stylelint-declaration-strict-value - v1.9.0](../README.md) / index

# Module: index

## Table of contents

### References

- [ruleName](index.md#rulename)

### Variables

- [default](index.md#default)
- [messages](index.md#messages)

## References

### ruleName

Re-exports [ruleName](defaults.md#rulename)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rule` | `Rule`<`any`, `any`\> |
| `ruleName` | `string` |

#### Defined in

[src/index.ts:484](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/19a59a9/src/index.ts#L484)

___

### messages

• **messages**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expected` | (`types`: `ExpectedType` \| `ExpectedTypes`, `value`: `string`, `property`: `string`, `customMessage`: `string`) => `string` |
| `failedToFix` | (`error`: `unknown`, `value`: `string`, `property`: `string`) => `string` |

#### Defined in

[src/index.ts:26](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/19a59a9/src/index.ts#L26)
