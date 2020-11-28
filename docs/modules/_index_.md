**[stylelint-declaration-strict-value](../README.md)**

> [Globals](../README.md) / "index"

# Module: "index"

## Index

### Interfaces

* [StylelintContext](../interfaces/_index_.stylelintcontext.md)
* [StylelintRuleFunction](../interfaces/_index_.stylelintrulefunction.md)

### Type aliases

* [PostCSSPlugin](_index_.md#postcssplugin)
* [RegExpArray](_index_.md#regexparray)
* [RegExpString](_index_.md#regexpstring)

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

*Defined in [index.ts:109](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L109)*

A rule function essentially returns a little PostCSS plugin.
It will report violations of this rule.

**`param`** PostCSS root (the parsed AST).

**`param`** PostCSS lazy result.

___

### RegExpArray

Ƭ  **RegExpArray**: [string, undefined \| string]

*Defined in [index.ts:61](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L61)*

___

### RegExpString

Ƭ  **RegExpString**: string

*Defined in [index.ts:60](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L60)*

## Variables

### declarationStrictValuePlugin

• `Const` **declarationStrictValuePlugin**: any = stylelint.createPlugin( ruleName, ruleFunction)

*Defined in [index.ts:426](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L426)*

___

### messages

• `Const` **messages**: object = utils.ruleMessages(ruleName, { expected,})

*Defined in [index.ts:24](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L24)*

#### Type declaration:

Name | Type |
------ | ------ |
`expected` | [expected](_lib_validation_.md#expected) |

___

### reFunc

• `Const` **reFunc**: RegExp = /^(?!var\(\s*--)[\s\S]+\([\s\S]*\)$/

*Defined in [index.ts:51](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L51)*

RegExp to parse functions.
- irgnoring CSS variables `var(--*)`
- allow multi line arguments

**`internal`** 

___

### reRegex

• `Const` **reRegex**: RegExp = /^\/(.*)\/([a-zA-Z]*)$/

*Defined in [index.ts:59](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L59)*

RegExp to parse regular expressions.
- supporting patterns
- and optional flags

**`internal`** 

___

### reSkipProp

• `Const` **reSkipProp**: RegExp = /^(?:@\|\$\|--).+$/

*Defined in [index.ts:32](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L32)*

RegExp to skip non-CSS properties.

**`internal`** 

___

### reVar

• `Const` **reVar**: RegExp = /^-?(?:@.+\|(?:(?:[a-zA-Z\_-]\|[^\x00-\x7F])+(?:[a-zA-Z0-9\_-]\|[^\x00-\x7F])*\.)?\$.+\|var\(\s*--[\s\S]+\))$/

*Defined in [index.ts:43](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L43)*

RegExp to parse CSS, SCSS and less variables.
- allowing CSS variables to be multi line
- Sass namespaces and CSS <ident-token> supported

**`internal`** 

**`see`** https://github.com/sass/sass/blob/master/accepted/module-system.md#member-references

**`see`** https://drafts.csswg.org/css-syntax-3/#ident-token-diagram

___

### ruleName

• `Const` **ruleName**: \"scale-unlimited/declaration-strict-value\" = "scale-unlimited/declaration-strict-value"

*Defined in [index.ts:22](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L22)*

Rule Name.

___

### utils

•  **utils**: utils

*Defined in [index.ts:23](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L23)*

## Functions

### getRegexString

▸ `Const`**getRegexString**(`value`: string): [RegExpArray](_index_.md#regexparray)

*Defined in [index.ts:77](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L77)*

Get pattern and flags of a Regular Expression string.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | string | Any string representing a Regular Expression. |

**Returns:** [RegExpArray](_index_.md#regexparray)

An Array of pattern and flags of a Regular Expression string.

___

### isRegexString

▸ `Const`**isRegexString**(`value`: string): value is RegExpString

*Defined in [index.ts:68](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L68)*

Checks if string is a Regular Expression.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | string | Any string.  |

**Returns:** value is RegExpString

___

### mapIgnoreValue

▸ `Const`**mapIgnoreValue**(`ignoreValue`: [TOptionPrimitive](_defaults_.md#toptionprimitive)): RegExp

*Defined in [index.ts:97](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L97)*

Map ignored value config to a Regular expression.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`ignoreValue` | [TOptionPrimitive](_defaults_.md#toptionprimitive) | A ignored value property. |

**Returns:** RegExp

A Regular Expression to match ignored values.

___

### ruleFunction

▸ `Const`**ruleFunction**(`properties`: string \| string[], `options`: [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md), `context?`: [StylelintContext](../interfaces/_index_.stylelintcontext.md)): (Anonymous function)

*Defined in [index.ts:141](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L141)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`properties` | string \| string[] | - |
`options` | [ISecondaryOptions](../interfaces/_defaults_.isecondaryoptions.md) | - |
`context` | [StylelintContext](../interfaces/_index_.stylelintcontext.md) | {} |

**Returns:** (Anonymous function)

___

### stringToRegex

▸ `Const`**stringToRegex**(`value`: [RegExpString](_index_.md#regexpstring)): RegExp

*Defined in [index.ts:86](https://github.com/AndyOGo/stylelint-declaration-strict-value/blob/9dd516f/src/index.ts#L86)*

Convert a Regular Expression string to an RegExp object.

**`internal`** 

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | [RegExpString](_index_.md#regexpstring) | Any string representing a Regular Expression. |

**Returns:** RegExp

A Regular Expression object.
