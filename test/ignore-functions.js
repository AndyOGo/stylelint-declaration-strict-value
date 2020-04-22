import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// disabling ignoreFunction
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [['color', 'margin'], {
    ignoreFunctions: false,
  }],

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: namespace.$bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { color: var(--bar, fallback); }' },
    { code: '.foo { color: var(--bar, fallback, fallback2); }' },
    {
      code: `.foo { color: var(
        --bar,
        fallback
      ); }`,
    },
    {
      code: `.foo { color: var(
        --bar,
        fallback,
        fallback2
      ); }`,
    },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected variable for "#fff" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Expected variable for "red" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: map-get($bar, baz); }',
      message: `Expected variable for "map-get($bar, baz)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: map-get(namespace.$bar, baz); }',
      message: `Expected variable for "map-get(namespace.$bar, baz)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: darken(#fff, 10%); }',
      message: `Expected variable for "darken(#fff, 10%)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: color(#fff, lighten(10%)); }',
      message: `Expected variable for "color(#fff, lighten(10%))" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { color: map-get(
        $bar,
        baz)
      ; }`,
      message: `Expected variable for "map-get(
        $bar,
        baz)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { color: map-get(
        namespace.$bar,
        baz)
      ; }`,
      message: `Expected variable for "map-get(
        namespace.$bar,
        baz)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { color: darken(
        #fff,
        10%)
      ; }`,
      message: `Expected variable for "darken(
        #fff,
        10%)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { color: color(
        #fff,
        lighten(10%))
      ; }`,
      message: `Expected variable for "color(
        #fff,
        lighten(10%))" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { margin: calc(
        var(--x) *
        var(--y)
      ); }`,
      message: `Expected variable for "calc(
        var(--x) *
        var(--y)
      )" of "margin" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
