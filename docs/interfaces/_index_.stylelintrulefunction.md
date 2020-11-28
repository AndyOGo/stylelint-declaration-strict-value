**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / ["index"](../modules/_index_.md) / StylelintRuleFunction

# Interface: StylelintRuleFunction

Stylelint declaration strict value rule function.

**`see`** https://stylelint.io/developer-guide/plugins

## Hierarchy

* **StylelintRuleFunction**

## Callable

▸ (`primaryOption`: string \| string[], `secondaryOptions?`: [ISecondaryOptions](_defaults_.isecondaryoptions.md), `context?`: [StylelintContext](_index_.stylelintcontext.md)): [PostCSSPlugin](../modules/_index_.md#postcssplugin)

*Defined in [index.ts:133](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L133)*

Stylelint declaration strict value rule function.

**`see`** https://stylelint.io/developer-guide/plugins

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`primaryOption` | string \| string[] | - |
`secondaryOptions?` | [ISecondaryOptions](_defaults_.isecondaryoptions.md) | - |
`context?` | [StylelintContext](_index_.stylelintcontext.md) | Only used for autofixing.  |

**Returns:** [PostCSSPlugin](../modules/_index_.md#postcssplugin)

Returns a PostCSS Plugin.

## Index

### Properties

* [primaryOptionArray](_index_.stylelintrulefunction.md#primaryoptionarray)

## Properties

### primaryOptionArray

•  **primaryOptionArray**: boolean

*Defined in [index.ts:139](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L139)*
