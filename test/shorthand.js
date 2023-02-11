import { ruleName } from '../src';

// default config
testRule({
  ruleName,

  config: ['/color/', { expandShorthand: true }],

  accept: [
    { code: '.foo { scrollbar-color: $foo @bar; }' },
    { code: '.foo { scrollbar-color: namespace.$bar var(--bar); }' },
    { code: '.foo { border-color: $color; }' },
    { code: '.foo { border: 0; }' },
    { code: '.foo { border: $foo; }' },
    { code: '.foo { border: 1px solid $bar; }' },
    { code: '.foo { border: 1px solid $bar; }' },
    { code: '.foo { border: 1px solid namespace.$bar; }' },
    { code: '.foo { border: 1px solid @bar; }' },
    { code: '.foo { border: 1px solid var(--bar); }' },
    { code: '.foo { border: 1px solid var(--bar, fallback); }' },
    { code: '.foo { border: 1px solid var(--bar, fallback, fallback2); }' },
    {
      code: `.foo { border: 1px solid var(
        --bar,
        fallback
      ); }`,
    },
    {
      code: `.foo { border: 1px solid var(
        --bar,
        fallback,
        fallback2
      ); }`,
    },
    { code: '.foo { border: 1px solid -$bar; }' },
    { code: '.foo { border: 1px solid -namespace.$bar; }' },
    { code: '.foo { border: 1px solid -@bar; }' },
    { code: '.foo { border: 1px solid -var(--bar); }' },
    { code: '.foo { border: 1px solid spacing(); }' },
    { code: '.foo { border: 1px solid map-get($bar, baz); }' },
    { code: '.foo { border: 1px solid map-get(namespace.$bar, baz); }' },
    { code: '.foo { border: 1px solid darken(#fff, 10%); }' },
    { code: '.foo { border: 1px solid color(#fff, lighten(10%)); }' },
    {
      code: `.foo { border: 1px solid map-get(
        $bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { border: 1px solid map-get(
        namespace.$bar,
        baz)
      ; }`,
    },
    {
      code: `.foo { border: 1px solid darken(
        #fff,
        10%)
      ; }`,
    },
    {
      code: `.foo { border: 1px solid color(
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
    { code: '.foo { background: no-repeat; }' },
  ],

  reject: [
    {
      code: '.foo { scrollbar-color: $foo #fff; }',
      message: `Expected variable or function for "#fff" of "scrollbar-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { scrollbar-color: transparent @bar; }',
      message: `Expected variable or function for "transparent" of "scrollbar-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: 1px solid #fff; }',
      message: `Expected variable or function for "#fff" of "border" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: 1px solid red; }',
      message: `Expected variable or function for "red" of "border" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background: #fff; }',
      message: `Expected variable or function for "#fff" of "background" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background: red; }',
      message: `Expected variable or function for "red" of "background" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

testRule({
  ruleName,

  config: [
    '/color/',
    {
      ignoreVariables: false,
      ignoreKeywords: 'transparent',
      expandShorthand: true,
    },
  ],

  accept: [
    { code: '.foo { scrollbar-color: transparent transparent; }' },
    { code: '.foo { scrollbar-color: transparent darken(#fff, 10%); }' },
    { code: '.foo { scrollbar-color: darken(#fff, 10%) darken(#fff, 10%); }' },
    { code: '.foo { scrollbar-color: darken(#fff, 10%) transparent; }' },
    { code: '.foo { border: 0; }' },
    { code: '.foo { border: transparent; }' },
    { code: '.foo { border: 1px solid transparent; }' },
    { code: '.foo { background: transparent; }' },
    { code: '.foo { background: no-repeat; }' },
  ],

  reject: [
    {
      code: '.foo { scrollbar-color: transparent $foo; }',
      message: `Expected function or keyword for "$foo" of "scrollbar-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { scrollbar-color: var(--bar) darken(#fff, 10%); }',
      message: `Expected function or keyword for "var(--bar)" of "scrollbar-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: $foo; }',
      message: `Expected function or keyword for "$foo" of "border" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: 1px solid $bar; }',
      message: `Expected function or keyword for "$bar" of "border" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: 1px solid namespace.$bar; }',
      message: `Expected function or keyword for "namespace.$bar" of "border" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: 1px solid @bar; }',
      message: `Expected function or keyword for "@bar" of "border" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border: 1px solid var(--bar); }',
      message: `Expected function or keyword for "var(--bar)" of "border" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background: $bar; }',
      message: `Expected function or keyword for "$bar" of "background" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background: namespace.$bar; }',
      message: `Expected function or keyword for "namespace.$bar" of "background" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background: @bar; }',
      message: `Expected function or keyword for "@bar" of "background" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background: var(--bar); }',
      message: `Expected function or keyword for "var(--bar)" of "background" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

testRule({
  ruleName,

  config: [
    '/margin-?(top|right|bottom|left)?/',
    {
      ignoreValues: ['0', 'auto'],
      expandShorthand: true,
    },
  ],

  accept: [
    { code: '.foo { margin: auto; }' },
    { code: '.foo { margin: 0; }' },
    { code: '.foo { margin: 0 auto; }' },
    { code: '.foo { margin: 0 auto 0; }' },
    { code: '.foo { margin: 0 auto 0 auto; }' },
  ],

  reject: [
    {
      code: '.foo { margin: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "margin" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

testRule({
  ruleName,

  config: [
    '/color/',
    {
      expandShorthand: false,
    },
  ],

  accept: [
    { code: '.foo { border: 1px solid #fff; }' },
    { code: '.foo { border: 1px solid red; }' },
    { code: '.foo { background: #fff; }' },
    { code: '.foo { background: red; }' },
    { code: '.foo { background: no-repeat; }' },
  ],
});

testRule({
  skip: true,
  ruleName,

  config: [
    '/color/',
    {
      expandShorthand: 'foo',
    },
  ],

  reject: [
    {
      code: '.foo { border: red; }',
      message: `Invalid option "{"expandShorthand":"foo"}" for rule ${ruleName}`,
    },
  ],
});

testRule({
  skip: true,
  ruleName,

  config: [
    '/color/',
    {
      recurseLonghand: 'foo',
    },
  ],

  reject: [
    {
      code: '.foo { border: red; }',
      message: `Invalid option "{"recurseLonghand":"foo"}" for rule ${ruleName}`,
    },
  ],
});
