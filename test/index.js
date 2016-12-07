import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// default config
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: 'color',

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { color: map-get($bar, baz); }' },
    { code: '.foo { color: darken(#fff, 10%); }' },
    { code: '.foo { color: color(#fff, lighten(10%)); }' },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected variable or function for #fff of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Expected variable or function for red of color (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})

// disabling ignoreFunction
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreFunctions: false,
  }],

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected variable for #fff of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Expected variable for red of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: map-get($bar, baz); }',
      message: `Expected variable for map-get($bar, baz) of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: darken(#fff, 10%); }',
      message: `Expected variable for darken(#fff, 10%) of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: color(#fff, lighten(10%)); }',
      message: `Expected variable for color(#fff, lighten(10%)) of color (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})

// array of properties
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [['color', 'font-size', 'fill']],

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { font-size: $bar; }' },
    { code: '.foo { font-size: @bar; }' },
    { code: '.foo { font-size: var(--bar); }' },
    { code: '.foo { fill: $bar; }' },
    { code: '.foo { fill: @bar; }' },
    { code: '.foo { fill: var(--bar); }' },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected variable or function for #fff of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { font-size: 16px; }',
      message: `Expected variable or function for 16px of font-size (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { fill: #fff; }',
      message: `Expected variable or function for #fff of fill (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})

// RegExp properties
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: '/color$/',

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { background-color: $bar; }' },
    { code: '.foo { background-color: @bar; }' },
    { code: '.foo { background-color: var(--bar); }' },
    { code: '.foo { border-color: $bar; }' },
    { code: '.foo { border-color: @bar; }' },
    { code: '.foo { border-color: var(--bar); }' },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected variable or function for #fff of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Expected variable or function for red of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background-color: #fff; }',
      message: `Expected variable or function for #fff of background-color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background-color: red; }',
      message: `Expected variable or function for red of background-color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border-color: #fff; }',
      message: `Expected variable or function for #fff of border-color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border-color: red; }',
      message: `Expected variable or function for red of border-color (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})

// ignore unlisted properties
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: 'color',

  accept: [
    { code: '.foo { display: block; }' },
    { code: '.foo { position: absolute; }' },
  ],
})
