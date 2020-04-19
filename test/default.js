import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// default config
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [['color', 'content']],

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: namespace.$bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { color: -$bar; }' },
    { code: '.foo { color: -namespace.$bar; }' },
    { code: '.foo { color: -@bar; }' },
    { code: '.foo { color: -var(--bar); }' },
    { code: '.foo { color: spacing(); }' },
    { code: '.foo { color: map-get($bar, baz); }' },
    { code: '.foo { color: map-get(namespace.$bar, baz); }' },
    { code: '.foo { color: darken(#fff, 10%); }' },
    { code: '.foo { color: color(#fff, lighten(10%)); }' },
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
  ],
})
