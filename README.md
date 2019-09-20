<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [stylelint-declaration-strict-value](#stylelint-declaration-strict-value)
- [Installation](#installation)
- [Usage](#usage)
    - [Primary Options](#primary-options)
      - [Multiple Properties](#multiple-properties)
      - [Regex support](#regex-support)
    - [Secondary Options](#secondary-options)
      - [ignoreVariables](#ignorevariables)
      - [ignoreFunctions](#ignorefunctions)
      - [ignoreKeywords](#ignorekeywords)
        - [Simple single keyword](#simple-single-keyword)
        - [List of keywords](#list-of-keywords)
        - [Complex Mighty Hash Mapping](#complex-mighty-hash-mapping)
      - [message](#message)
      - [Autofix support](#autofix-support)
    - [Scheme](#scheme)
  - [Credit / Inspiration](#credit--inspiration)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# stylelint-declaration-strict-value

[![Build Status](https://travis-ci.org/AndyOGo/stylelint-declaration-strict-value.svg?branch=master)](https://travis-ci.org/AndyOGo/stylelint-declaration-strict-value)

A [stylelint](https://github.com/stylelint/stylelint) plugin that enforces either variables (`$sass`, `@less`, `var(--cssnext)`), functions or custom CSS keywords (`inherit`, `none`, etc.) for property's values.

# Installation

```sh
npm install stylelint-declaration-strict-value
```

# Usage

Add it to your stylelint config `plugins` array, then add `"declaration-strict-value"` to your rules,
specifying the property for which you want to check the usage of variables, functions or keywords.

Like so:

```js
// .stylelintrc
{
  "plugins": [
    "stylelint-declaration-strict-value"
  ],
  "rules": {
    // ...
    "scale-unlimited/declaration-strict-value": "color",
    // ...
  }
}
```

The following patterns are considered **warnings:**

```css
a { color: #FFF; }

a { color: inherit; }

a { color: currentColor; }
```

The following patterns are **not** considered **warnings:**

```css
a { color: var(--color-white); }

a { color: -var(--color-white); }

a { color: color(red alpha(-10%)); }
```

```less
a { color: @color-white; }

a { color: -@color-white; }

a { color: darken(#fff, 10%); }
```

```scss
a { color: $color-white; }

a { color: -$color-white; }

a { color: darken(#fff, 10%); }
```

### Primary Options

Primary options represent either a single property or a list of multiple properties to check. Technically it's either a `"string"` or an `[array]` of simple strings or `/RegExp/`.

#### Multiple Properties

Multiple properties can be linted by passing as an array. Regex can also be used inside arrays.

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": [
      ["/color/", "z-index", "font-size"]
      ],
  // ...
}
```

The following patterns are considered **warnings:**

```css
a {
  color: #FFF;
  z-index: 1;
  font-size: 20px;
 }

a {
  color: inherit;
  z-index: auto;
  font-size:
  inherit;
 }
```

The following patterns are **not** considered **warnings:**

```css
a {
  color: var(--color-white);
  z-index: var(--a-z-index);
  font-size: var(--a-font-size);
}
```

```less
a {
  color: @color-white;
  z-index: @a-z-index;
  font-size: @a-font-size;
}
```

```scss
a {
  color: $color-white;
  z-index: $a-z-index;
  font-size: $a-font-size;
}
```

**Note:** Multiple Properties require you to use nested arrays `[[]]` in your configuration.

#### Regex support

Passing a regex will lint the variable usage for all matching properties, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": "/color/",
  // ...
}
```

**Note for JSON / YAML:** Regex needs to be activated by surrounding `/` slashes.

The following patterns are considered **warnings:**

```css
a {
  color: #FFF;
  background-color: #FFF;
  border-color: #FFF;
}

a {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}
```

The following patterns are **not** considered **warnings:**

```css
a {
  color: var(--color-white);
  background-color: var(--color-white);
  border-color: var(--color-white);
}
```

```less
a {
  color: @color-white;
  background-color: @color-white;
  border-color: @color-white;
}
```

```scss
a {
  color: $color-white;
  background-color: $color-white;
  border-color: $color-white;
}
```

### Secondary Options

Additionally you can pass an optional second options hash to enable/disable variables, functions and custom keywords.

The default config is:

```js
// defaults
{
  ignoreVariables: true,
  ignoreFunctions: true,
  ignoreKeywords: null,
}
```

#### ignoreVariables

Variables can be enabled or disabled, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": ["/color/", {
    ignoreVariables: false,
  }],
  // ...
}
```

The following patterns are considered **warnings:**

```css
a { color: var(--color-white); }
```

```less
a { color: @color-white; }
```

```scss
a { color: $color-white; }
```

The following patterns are **not** considered **warnings:**

```css
a { color: color(red alpha(-10%)); }
```

```less
a { color: darken(#fff, 10%); }
```

```scss
a { color: darken(#fff, 10%); }
```

#### ignoreFunctions

Functions can be enabled or disabled, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": ["/color/", {
    ignoreFunctions: false,
  }],
  // ...
}
```

The following patterns are considered **warnings:**

```css
a { color: color(red alpha(-10%)); }
```

```less
a { color: darken(#fff, 10%); }
```

```scss
a { color: darken(#fff, 10%); }
```

The following patterns are **not** considered **warnings:**

```css
a { color: var(--color-white); }
```

```less
a { color: @color-white; }
```

```scss
a { color: $color-white; }
```

#### ignoreKeywords

This allows you to ignore several CSS keywords like `currentColor`, `inherit`, `transparent`, etc.
**Note:** for convenience also non-standard-keywords like `0` can be specified.

This configuration can either be a simple `"string"`, `number`, an `[array]` of `"strings"`, `numbers` or a complex hash of property/keyword mappings.

##### Simple single keyword

To ignore a single `keyword` for all properties simply use a `"string"`, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": ["/color/", {
    ignoreKeywords: "currentColor",
  }],
  // ...
}
```

The following patterns are considered **warnings:**

```css
a {
  color: #FFF;
  background-color: #FFF;
  border-color: #FFF;
}

a {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}
```

The following patterns are **not** considered **warnings:**

```css
a {
  color: currentColor;
  background-color: currentColor;
  border-color: currentColor;
}
```

Or with **multiple** properties:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": [
    ["/color/", "fill", "stroke"], {
    ignoreKeywords: "currentColor",
  }],
  // ...
}
```

The following patterns are considered **warnings:**

```css
a {
  color: #FFF;
  background-color: #FFF;
  border-color: #FFF;
  fill: #FFF;
  stroke: #FFF;
}

a {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
  fill: inherit;
  stroke: inherit;
}
```

The following patterns are **not** considered **warnings:**

```css
a {
  color: currentColor;
  background-color: currentColor;
  border-color: currentColor;
  fill: currentColor;
  stroke: currentColor;
}
```

##### List of keywords

To ignore a list of `keywords` for all properties simply use an `[array]`, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": ["/color/", {
    ignoreKeywords: ["currentColor", "transparent", "inherit"],
  }],
  // ...
}
```

The following patterns are considered **warnings:**

```css
a {
  color: #FFF;
  background-color: #FFF;
  border-color: #FFF;
}
```

The following patterns are **not** considered **warnings:**

```css
a {
  color: currentColor;
  background-color: currentColor;
  border-color: currentColor;
}

a {
  color: transparent;
  background-color: transparent;
  border-color: transparent;
}

a {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}
```

Or with **multiple** properties:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": [
    ["/color/", "fill", "stroke"], {
    ignoreKeywords: ["currentColor", "transparent", "inherit"],
  }],
  // ...
}
```

The following patterns are considered **warnings:**

```css
a {
  color: #FFF;
  background-color: #FFF;
  border-color: #FFF;
  fill: #FFF;
  stroke: #FFF;
}
```

The following patterns are **not** considered **warnings:**

```css
a {
  color: currentColor;
  background-color: currentColor;
  border-color: currentColor;
  fill: currentColor;
  stroke: currentColor;
}

a {
  color: transparent;
  background-color: transparent;
  border-color: transparent;
  fill: transparent;
  stroke: transparent;
}

a {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
  fill: inherit;
  stroke: inherit;
}
```

##### Complex Mighty Hash Mapping

You may noticed that the above methods do count for all properties. In case you wish more sophisticated control `{hash}` based configs is the right choice for you.

The basic principle works the same as above - you either have one keyword or a list of keywords. This time you can define them for each property separately, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": [
    ["/color/", "fill", "stroke"], {
    ignoreKeywords: {
        "/color/": ["currentColor", "transparent", "inherit"],
        "fill": ["currentColor", "inherit"],
        "stroke": "currentColor",
        "z-index": 0,
    },
  }],
  // ...
}
```

The following patterns are considered **warnings:**

```css
a {
  color: #FFF;
  background-color: #FFF;
  border-color: #FFF;
  fill: #FFF;
  stroke: #FFF;
  z-index: 1;
}

a {
  fill: transparent;
  stroke: transparent;
}

a {
  stroke: inherit;
}
```

The following patterns are **not** considered **warnings:**

```css
a {
  color: currentColor;
  background-color: currentColor;
  border-color: currentColor;
  fill: currentColor;
  stroke: currentColor;
  z-index: 0;
}

a {
  color: transparent;
  background-color: transparent;
  border-color: transparent;
}

a {
  color: inherit;
  background-color: inherit;
  border-color: inherit;
  fill: inherit;
}
```

**Note** In case you still want to define a default list of allowed keywords, you can with the empty `""` string property name, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": [
    ["/color/", "fill", "stroke"], {
    ignoreKeywords: {
        // default, for all
        "": ["currentColor"],
        
        // specific mapping
        "/color/": ["currentColor", "transparent", "inherit"],
        "fill": ["currentColor", "inherit"],
    },
  }],
  // ...
}
```

#### message

You can provide your [custom `message`](https://stylelint.io/user-guide/configuration/#custom-messages) string, it will interpolate the `${types}`, `${value}` and `${property}` placeholders, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": [
    ["/color/", "fill", "stroke"], {
    message: "Custom expected ${types} for \"${value}\" of \"${property}\"",
  }],
  // ...
}
```

#### Autofix support

This plugin supports **configurable** [autofixing enabled by `--fix` option](https://stylelint.io/user-guide/cli/#autofixing-errors).

**Important:** it's up to you to specify how autofixing should take place, this is because this plugin has to deal with **dynamic** values not static ones (which are predictable and very easy to autofix).

So you have to supply an `autoFixFunc` function and **implement each fix you want by yourself**. To help you with that this function receives the whole [PostCSS API](http://api.postcss.org/postcss.html), all validations and configuration of this plugin, as follows [`node`](http://api.postcss.org/Node.html), `validation`, [`root`](http://api.postcss.org/Declaration.html#root) and `config`.
`validation` is a hash of `{ validVar, validFunc, validKeyword }`, which tells you which aspect of the rule failed validation.

**Note:** it's best you use a JavaScript based config file, which is easy because Stylelint utilizes [cosmiconfig](https://github.com/davidtheclark/cosmiconfig).
Alternatively you can specify a common JS module, which will be resolved by [standard `require`](https://nodejs.org/api/modules.html#modules_file_modules) calls including support for `CWD`.

You can also disable autofixing by setting [`disableFix`](https://github.com/stylelint/stylelint/blob/master/docs/developer-guide/plugins.md#the-anatomy-of-a-plugin) to `true`;

```js
// .stylelintrc.js
function autoFixFunc(node, validation, root, config) {
  const { value, prop } = node

  if (prop === 'color') {
    switch (value) {
      case '#fff':
        // auto-fix by returned value
        return '$color-white'

      case 'red':
        // auto-fix by PostCSS AST tranformation
        node.value = '$color-red'
    }
  }
}

module.exports = {
  "rules": {
    // ...
    "scale-unlimited/declaration-strict-value": [
      ["/color/"], {
      autoFixFunc: autoFixFunc,
      disableFix: true | false,
    }],
    // ...
  }
}
```

**Or:**

```js
// ./auto-fix-func.js
function autoFixFunc(node, validation, root, config) {
  const { value, prop } = node

  if (prop === 'color') {
    switch (value) {
      case '#fff':
        // auto-fix by returned value
        return '$color-white'

      case 'red':
        // auto-fix by PostCSS AST tranformation
        node.value = '$color-red'
    }
  }
}

module.exports = autoFixFunc
```

```js
// .stylelintrc
"rules": {
    // ...
    "scale-unlimited/declaration-strict-value": [
      ["/color/"], {
      autoFixFunc: './auto-fix-func.js',
      disableFix: true | false,
    }],
    // ...
  }
```

### Scheme

The config scheme looks as follows:

```js
[
  // primary options
  "string" || "/RegExp/" || ["string", "/RegExp/" /* ... */],

  // secondary options (optional)
  {
    ignoreVariables: true || false,
    ignoreFunctions: true || false,
    ignoreKeywords: "string" ||
      ["string", "string", /* ... */] ||
      {
        // match all
        "": "string" || ["string", /* ... */],
        
        // match specific prop
        "color": "string" || ["string", /* ... */],
      },
    autoFixFunc: './auto-fix-func.js' || function() {},
    disableFix: true || false,
    message: "Custom expected ${types} for \"${value}\" of \"${property}\"",
  }
]
```

## Credit / Inspiration

This package was mainly inspired by [`stylelint-declaration-use-variable`](https://github.com/sh-waqar/stylelint-declaration-use-variable).
Originally I planned to contribute, but as I faced more issues I decided to write my own from scratch based on `ES6`.

Proudly brought to you by [`<scale-unlimited>`](http://www.scale-unlimited.com)

# License

The MIT License (MIT)

Copyright (c) 2016 Andreas Deuschlinger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
