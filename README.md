# stylelint-declaration-strict-value

A [stylelint](https://github.com/stylelint/stylelint) plugin that enforces either variables (`$sass`, `@less`, `var(--cssnext)`), functions or custom CSS keywords (`inherit`, `none`, etc.) for property's values.

# Installation

```sh
npm install stylelint-declaration-strict-value
```

# Usage

## Usage

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

**Note:** Multiple Properties require you to use nested arrays `[[]]` in your configuration.

#### Regex support

Passing a regex will lint the variable usage for all matching properties. Regex is actiavated by surrounding `/` slashes.

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": "/color/",
  // ...
}
```

### Secondary Options

Additionally you can pass an optional second options hash to enable/disable functions and custom keywords.

The default config is:

```js
// defaults
{
  ignoreFunctions: true,
  ignoreKeywords: null,
}
```

#### ignoreFunctions

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

#### ignoreFunctions

Function can be enabled or disabled, like:

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

#### ignoreKeywords

This allows you ignore several CSS keywords like `currentColor`, `initial`, `transparent`, etc.

This configuration can either be a simple `"string"`, an `[array]` of `"strings"` or a complex hash of property/keyword mappings.

##### Simple single keyword

To ignore a single `keyword` for all properties simply use a `"string", like:

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

##### List of keywords

To ignore a list of `keywords` for all properties simply use an `[array]`, like:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": ["/color/", {
    ignoreKeywords: ["currentColor", "transparent", "initial"],
  }],
  // ...
}
```

Or with **multiple** properties:

```js
// .stylelintrc
"rules": {
  // ...
  "scale-unlimited/declaration-strict-value": [
    ["/color/", "fill", "stroke"], {
    ignoreKeywords: ["currentColor", "transparent", "initial"],
  }],
  // ...
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
        "/color/": ["currentColor", "transparent", "initial"],
        "fill": ["currentColor", "initial"],
        "stroke": "currentColor",
    },
  }],
  // ...
}
```

**Note** In case you still want to define a default list of allowed keyswords, you can with the empty `""` string property name, like:

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
        "/color/": ["currentColor", "transparent", "initial"],
        "fill": ["currentColor", "initial"],
    },
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
    ignoreFunctions: true || false,
    ignoreKeywords: "string" ||
      ["string", "string", /* ... */] ||
      {
        // match all
        "": "string" || ["string", /* ... */],
        
        // match specific prop
        "color": "string" || ["string", /* ... */],
      }
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
