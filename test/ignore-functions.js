import { ruleName } from '../src';

// disabling ignoreFunction
testRule({
  ruleName,

  config: [
    ['color', 'margin'],
    {
      ignoreFunctions: false,
    },
  ],

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
});

testRule({
  ruleName,

  config: [
    ['color', 'margin'],
    {
      ignoreFunctions: {
        margin: false,
      },
    },
  ],

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
    {
      code: '.foo { color: map-get($bar, baz); }',
    },
    {
      code: '.foo { color: map-get(namespace.$bar, baz); }',
    },
    {
      code: '.foo { color: darken(#fff, 10%); }',
    },
    {
      code: '.foo { color: color(#fff, lighten(10%)); }',
    },
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
      code: `.foo { margin: calc(
        var(--x) *
        var(--y)
      ); }`,
      message: `Expected variable or function for "calc(
        var(--x) *
        var(--y)
      )" of "margin" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

testRule({
  ruleName,

  config: [
    'color',
    {
      ignoreFunctions: 'foo',
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"ignoreFunctions":"foo"}" for rule "${ruleName}"`,
    },
  ],
});
