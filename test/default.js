import { ruleName } from '../src';

// default config
testRule({
  ruleName,

  config: [['color', 'content', 'margin']],

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
      code: `@value bar: #000;
            .foo { color: bar; }`,
    },
    { code: '.foo { color: -$bar; }' },
    { code: '.foo { color: -namespace.$bar; }' },
    { code: '.foo { color: -@bar; }' },
    { code: '.foo { color: -var(--bar); }' },
    {
      code: `@value bar: #000;
            .foo { color: -bar; }`,
    },
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
      code: '.foo { color: bar; }',
      message: `Expected variable or function for "bar" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "$bar"; }',
      message: `Expected variable or function for ""$bar"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "namespace.$bar"; }',
      message: `Expected variable or function for ""namespace.$bar"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "@bar"; }',
      message: `Expected variable or function for ""@bar"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "var(--bar)"; }',
      message: `Expected variable or function for ""var(--bar)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "var(--bar, fallback)"; }',
      message: `Expected variable or function for ""var(--bar, fallback)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "var(--bar, fallback, fallback2)"; }',
      message: `Expected variable or function for ""var(--bar, fallback, fallback2)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "var(
        --bar,
        fallback
      )"; }`,
      message: `Expected variable or function for ""var(
        --bar,
        fallback
      )"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "var(
        --bar,
        fallback,
        fallback2
      )"; }`,
      message: `Expected variable or function for ""var(
        --bar,
        fallback,
        fallback2
      )"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `@value bar: #000;
            .foo { content: "bar"; }`,
      message: `Expected variable or function for ""bar"" of "content" (${ruleName})`,
      line: 2,
      column: 20,
    },
    {
      code: '.foo { content: "-$bar"; }',
      message: `Expected variable or function for ""-$bar"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "-namespace.$bar"; }',
      message: `Expected variable or function for ""-namespace.$bar"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "-@bar"; }',
      message: `Expected variable or function for ""-@bar"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "-var(--bar)"; }',
      message: `Expected variable or function for ""-var(--bar)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "-var(--bar, fallback)"; }',
      message: `Expected variable or function for ""-var(--bar, fallback)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "-var(--bar, fallback, fallback2)"; }',
      message: `Expected variable or function for ""-var(--bar, fallback, fallback2)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "-var(
        --bar,
        fallback
      )"; }`,
      message: `Expected variable or function for ""-var(
        --bar,
        fallback
      )"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "-var(
        --bar,
        fallback,
        fallback2
      )"; }`,
      message: `Expected variable or function for ""-var(
        --bar,
        fallback,
        fallback2
      )"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "spacing()"; }',
      message: `Expected variable or function for ""spacing()"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "map-get($bar, baz)"; }',
      message: `Expected variable or function for ""map-get($bar, baz)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "map-get(namespace.$bar, baz)"; }',
      message: `Expected variable or function for ""map-get(namespace.$bar, baz)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "darken(#fff, 10%)"; }',
      message: `Expected variable or function for ""darken(#fff, 10%)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { content: "color(#fff, lighten(10%))"; }',
      message: `Expected variable or function for ""color(#fff, lighten(10%))"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "map-get(
        $bar,
        baz)"
      ; }`,
      message: `Expected variable or function for ""map-get(
        $bar,
        baz)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "map-get(
        namespace.$bar,
        baz)"
      ; }`,
      message: `Expected variable or function for ""map-get(
        namespace.$bar,
        baz)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "darken(
        #fff,
        10%)"
      ; }`,
      message: `Expected variable or function for ""darken(
        #fff,
        10%)"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "color(
        #fff,
        lighten(10%))"
      ; }`,
      message: `Expected variable or function for ""color(
        #fff,
        lighten(10%))"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: `.foo { content: "calc(
        var(--x) *
        var(--y)
      )"; }`,
      message: `Expected variable or function for ""calc(
        var(--x) *
        var(--y)
      )"" of "content" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});
