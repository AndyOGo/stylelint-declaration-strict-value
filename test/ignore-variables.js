import { ruleName } from '../src';

// disabling ignoreVariables
testRule({
  ruleName,

  config: [
    ['color', 'margin'],
    {
      ignoreVariables: false,
    },
  ],

  accept: [
    { code: '.foo { color: spacing(); }' },
    { code: '.foo { color: map-get($bar, baz); }' },
    { code: '.foo { color: map-get(namespace.$bar, baz); }' },
    { code: '.foo { color: darken(#fff, 10%); }' },
    { code: '.foo { color: color(#fff, lighten(10%)); }' },
    {
      code: `.foo { color: map-get(
        $bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { color: map-get(
        namespace.$bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { color: darken(
        #fff,
        10%)
      ; }`,
    },
    {
      code: `.foo { color: color(
        #fff,
        lighten(10%))
      ; }`,
    },
    {
      code: `.foo { margin: calc(
        var(--x) *
        var(--y)
      ); }`,
    },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected function for "#fff" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Expected function for "red" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: $bar; }',
      message: `Expected function for "$bar" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: namespace.$bar; }',
      message: `Expected function for "namespace.$bar" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: @bar; }',
      message: `Expected function for "@bar" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: var(--bar); }',
      message: `Expected function for "var(--bar)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { color: var(
        --bar,
        fallback
      ); }`,
      message: `Expected function for "var(
        --bar,
        fallback
      )" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { color: var(
        --bar,
        fallback,
        fallback2
      ); }`,
      message: `Expected function for "var(
        --bar,
        fallback,
        fallback2
      )" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `@value bar: #000;
            .foo { color: bar; }`,
      message: `Expected function for "bar" of "color" (${ruleName})`,
      line: 2,
      column: 20,
    },
  ],
});

testRule({
  ruleName,

  config: [
    ['color', 'margin'],
    {
      ignoreVariables: {
        color: false,
      },
    },
  ],

  accept: [
    { code: '.foo { color: spacing(); }' },
    { code: '.foo { color: map-get($bar, baz); }' },
    { code: '.foo { color: map-get(namespace.$bar, baz); }' },
    { code: '.foo { color: darken(#fff, 10%); }' },
    { code: '.foo { color: color(#fff, lighten(10%)); }' },
    {
      code: `.foo { color: map-get(
        $bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { color: map-get(
        namespace.$bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { color: darken(
        #fff,
        10%)
      ; }`,
    },
    {
      code: `.foo { color: color(
        #fff,
        lighten(10%))
      ; }`,
    },
    { code: '.foo { margin: namespace.$bar; }' },
    { code: '.foo { margin: @bar; }' },
    { code: '.foo { margin: var(--bar); }' },
    {
      code: `.foo { margin: calc(
        var(--x) *
        var(--y)
      ); }`,
    },
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
      code: '.foo { color: $bar; }',
      message: `Expected variable or function for "$bar" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: namespace.$bar; }',
      message: `Expected variable or function for "namespace.$bar" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: @bar; }',
      message: `Expected variable or function for "@bar" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: var(--bar); }',
      message: `Expected variable or function for "var(--bar)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { color: var(
        --bar,
        fallback
      ); }`,
      message: `Expected variable or function for "var(
        --bar,
        fallback
      )" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { color: var(
        --bar,
        fallback,
        fallback2
      ); }`,
      message: `Expected variable or function for "var(
        --bar,
        fallback,
        fallback2
      )" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `@value bar: #000;
            .foo { color: bar; }`,
      message: `Expected variable or function for "bar" of "color" (${ruleName})`,
      line: 2,
      column: 20,
    },
  ],
});

testRule({
  ruleName,

  config: [
    'color',
    {
      ignoreVariables: 'foo',
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"ignoreVariables":"foo"}" for rule "${ruleName}"`,
    },
  ],
});
