import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// default config
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: '/color|margin|border/',

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { color: -$bar; }' },
    { code: '.foo { color: -@bar; }' },
    { code: '.foo { color: -var(--bar); }' },
    { code: '.foo { color: map-get($bar, $baz); }' },
    { code: '.foo { color: darken(#fff, 10%); }' },
    { code: '.foo { color: color(#fff, lighten(10%)); }' },
    { code: '.foo { margin: $y $x; }' },
    { code: '.foo { margin: @y @x; }' },
    { code: '.foo { margin: var(--y) var(--x); }' },
    { code: '.foo { margin: -$y $x; }' },
    { code: '.foo { margin: -@y @x; }' },
    { code: '.foo { margin: -var(--y) var(--x); }' },
    { code: '.foo { margin: $y -$x; }' },
    { code: '.foo { margin: @y -@x; }' },
    { code: '.foo { margin: var(--y) -var(--x); }' },
    { code: '.foo { margin: -$y -$x; }' },
    { code: '.foo { margin: -@y -@x; }' },
    { code: '.foo { margin: -var(--y) -var(--x); }' },
    { code: '.foo { margin: $top $x $bottom; }' },
    { code: '.foo { margin: @top @x @bottom; }' },
    { code: '.foo { margin: var(--top) var(--x) var(--bottom); }' },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected variable or function for "#fff" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Expected variable or function for "red" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { margin: 10px; }',
      message: `Expected variable or function for "10px" of "margin" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: 1px solid red; }',
      message: `Expected variable or function for "1px solid red" of "border" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
