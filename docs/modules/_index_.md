**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / "index"

# Module: "index"

## Index

### Interfaces

* [StylelintContext](../interfaces/_index_.stylelintcontext.md)
* [StylelintRuleFunction](../interfaces/_index_.stylelintrulefunction.md)

### Type aliases

* [PostCSSPlugin](_index_.md#postcssplugin)
* [TPrimaryOptions](_index_.md#tprimaryoptions)
* [TRegExpArray](_index_.md#tregexparray)

### Variables

* [declarationStrictValuePlugin](_index_.md#declarationstrictvalueplugin)
* [messages](_index_.md#messages)
* [reFunc](_index_.md#refunc)
* [reRegex](_index_.md#reregex)
* [reSkipProp](_index_.md#reskipprop)
* [reVar](_index_.md#revar)
* [ruleName](_index_.md#rulename)
* [utils](_index_.md#utils)

### Functions

* [getRegexString](_index_.md#getregexstring)
* [isRegexString](_index_.md#isregexstring)
* [mapIgnoreValue](_index_.md#mapignorevalue)
* [ruleFunction](_index_.md#rulefunction)
* [stringToRegex](_index_.md#stringtoregex)

## Type aliases

### PostCSSPlugin

Ƭ  **PostCSSPlugin**: (root: Root, result: Result) => void \| PromiseLike\<void>

*Defined in [index.ts:115](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L115)*

A rule function essentially returns a little PostCSS plugin.
It will report violations of this rule.

**`param`** PostCSS root (the parsed AST).

**`param`** PostCSS lazy result.

___

### TPrimaryOptions

Ƭ  **TPrimaryOptions**: string \| [TRegExpString](_defaults_.md#tregexpstring) \| [TPrimaryOptions](_index_.md#tprimaryoptions)[]

*Defined in [index.ts:133](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L133)*

Primary options, a CSS property or list of CSS properties to lint.
- Regular Expression strings are supported

___

### TRegExpArray

Ƭ  **TRegExpArray**: [string, undefined \| string]

*Defined in [index.ts:67](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L67)*

**`internal`** 

## Variables

### declarationStrictValuePlugin

• `Const` **declarationStrictValuePlugin**: any = stylelint.createPlugin( ruleName, ruleFunction)

*Defined in [index.ts:438](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L438)*

___

### messages

• `Const` **messages**: object = utils.ruleMessages(ruleName, { expected,})

*Defined in [index.ts:28](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L28)*

#### Type declaration:

Name | Type |
------ | ------ |
`expected` | [expected](_lib_validation_.md#expected) |

___

### reFunc

• `Const` **reFunc**: RegExp = /^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/

*Defined in [index.ts:55](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L55)*

RegExp to parse functions.
- irgnoring CSS variables `var(--*)`
- allow multi line arguments

**`internal`** 

___

### reRegex

• `Const` **reRegex**: RegExp = /^\/(.*)\/([a-zA-Z]*)$/

*Defined in [index.ts:63](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L63)*

RegExp to parse regular expressions.
- supporting patterns
- and optional flags

**`internal`** 

___

### reSkipProp

• `Const` **reSkipProp**: RegExp = /^(?:@\|\$\|--).+$/

*Defined in [index.ts:36](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L36)*

RegExp to skip non-CSS properties.

**`internal`** 

___

### reVar

• `Const` **reVar**: RegExp = /^-?(?:@.+\|(?:(?:[a-zA-Z\_-]\|[^\x00-\x7F])+(?:[a-zA-Z0-9\_-]\|[^\x00-\x7F])*\.)?\$.+\|var\(\s*--[\s\S]+\))$/

*Defined in [index.ts:47](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L47)*

RegExp to parse CSS, SCSS and less variables.
- allowing CSS variables to be multi line
- Sass namespaces and CSS <ident-token> supported

**`internal`** 

**`see`** https://github.com/sass/sass/blob/master/accepted/module-system.md#member-references

**`see`** https://drafts.csswg.org/css-syntax-3/#ident-token-diagram

___

### ruleName

• `Const` **ruleName**: \"scale-unlimited/declaration-strict-value\" = "scale-unlimited/declaration-strict-value"

*Defined in [index.ts:26](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L26)*

Rule Name.

___

### utils

•  **utils**: utils

*Defined in [index.ts:27](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L27)*

## Functions

### getRegexString

▸ `Const`**getRegexString**(`value`: string): [TRegExpArray](_index_.md#tregexparray)

*Defined in [index.ts:83](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L83)*

Get pattern and flags of a Regular Expression string.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | string | Any string representing a Regular Expression. |

**Returns:** [TRegExpArray](_index_.md#tregexparray)

An Array of pattern and flags of a Regular Expression string.

___

### isRegexString

▸ `Const`**isRegexString**(`value`: string): value is TRegExpString

*Defined in [index.ts:74](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L74)*

Checks if string is a Regular Expression.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | string | Any string.  |

**Returns:** value is TRegExpString

___

### mapIgnoreValue

▸ `Const`**mapIgnoreValue**(`ignoreValue`: [TIgnoreValue](_defaults_.md#tignorevalue)): RegExp

*Defined in [index.ts:103](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L103)*

Map ignored value config to a Regular expression.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreValue` | [TIgnoreValue](_defaults_.md#tignorevalue) | A ignored value property. |

**Returns:** RegExp

A Regular Expression to match ignored values.

___

### ruleFunction

▸ `Const`**ruleFunction**(`properties`: string \| string[], `options`: [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md), `context?`: [StylelintContext](../interfaces/_index_.stylelintcontext.md)): (Anonymous function)

*Defined in [index.ts:153](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L153)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`properties` | string \| string[] | - |
`options` | [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md) | - |
`context` | [StylelintContext](../interfaces/_index_.stylelintcontext.md) | {} |

**Returns:** (Anonymous function)

___

### stringToRegex

▸ `Const`**stringToRegex**(`value`: [TRegExpString](_defaults_.md#tregexpstring)): RegExp

*Defined in [index.ts:92](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/99cea2d/src/index.ts#L92)*

Convert a Regular Expression string to an RegExp object.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | [TRegExpString](_defaults_.md#tregexpstring) | Any string representing a Regular Expression. |

**Returns:** RegExp

A Regular Expression object.
