import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// default config
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [['/color/']],

  accept: [
    { code: '.foo { boder: 1px solid $bar; }' },
    { code: '.foo { boder: 1px solid $bar; }' },
    { code: '.foo { boder: 1px solid namespace.$bar; }' },
    { code: '.foo { boder: 1px solid @bar; }' },
    { code: '.foo { boder: 1px solid var(--bar); }' },
    { code: '.foo { boder: 1px solid var(--bar, fallback); }' },
    { code: '.foo { boder: 1px solid var(--bar, fallback, fallback2); }' },
    {
      code: `.foo { boder: 1px solid var(
        --bar,
        fallback
      ); }`,
    },
    {
      code: `.foo { boder: 1px solid var(
        --bar,
        fallback,
        fallback2
      ); }`,
    },
    { code: '.foo { boder: 1px solid -$bar; }' },
    { code: '.foo { boder: 1px solid -namespace.$bar; }' },
    { code: '.foo { boder: 1px solid -@bar; }' },
    { code: '.foo { boder: 1px solid -var(--bar); }' },
    { code: '.foo { boder: 1px solid spacing(); }' },
    { code: '.foo { boder: 1px solid map-get($bar, baz); }' },
    { code: '.foo { boder: 1px solid map-get(namespace.$bar, baz); }' },
    { code: '.foo { boder: 1px solid darken(#fff, 10%); }' },
    { code: '.foo { boder: 1px solid color(#fff, lighten(10%)); }' },
    {
      code: `.foo { boder: 1px solid map-get(
        $bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { boder: 1px solid map-get(
        namespace.$bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { boder: 1px solid darken(
        #fff,
        10%)
      ; }`,
    },
    {
      code: `.foo { boder: 1px solid color(
        #fff,
        lighten(10%))
      ; }`,
    },

    { code: '.foo { background: $bar; }' },
    { code: '.foo { background: $bar; }' },
    { code: '.foo { background: namespace.$bar; }' },
    { code: '.foo { background: @bar; }' },
    { code: '.foo { background: var(--bar); }' },
    { code: '.foo { background: var(--bar, fallback); }' },
    { code: '.foo { background: var(--bar, fallback, fallback2); }' },
    {
      code: `.foo { background: var(
        --bar,
        fallback
      ); }`,
    },
    {
      code: `.foo { background: var(
        --bar,
        fallback,
        fallback2
      ); }`,
    },
    { code: '.foo { background: -$bar; }' },
    { code: '.foo { background: -namespace.$bar; }' },
    { code: '.foo { background: -@bar; }' },
    { code: '.foo { background: -var(--bar); }' },
    { code: '.foo { background: spacing(); }' },
    { code: '.foo { background: map-get($bar, baz); }' },
    { code: '.foo { background: map-get(namespace.$bar, baz); }' },
    { code: '.foo { background: darken(#fff, 10%); }' },
    { code: '.foo { background: color(#fff, lighten(10%)); }' },
    {
      code: `.foo { background: map-get(
        $bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { background: map-get(
        namespace.$bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { background: darken(
        #fff,
        10%)
      ; }`,
    },
    {
      code: `.foo { background: color(
        #fff,
        lighten(10%))
      ; }`,
    },
  ],

  reject: [
    {
      code: '.foo { border: 1px solid #fff; }',
      message: `Expected variable or function for "#fff" of "border-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: 1px solid red; }',
      message: `Expected variable or function for "red" of "border-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background: #fff; }',
      message: `Expected variable or function for "#fff" of "background-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background: red; }',
      message: `Expected variable or function for "red" of "background-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
