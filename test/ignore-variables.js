import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// disabling ignoreVariables
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreVariables: false,
  }],

  accept: [
    { code: '.foo { color: spacing(); }' },
    { code: '.foo { color: map-get($bar, baz); }' },
    { code: '.foo { color: map-get(namespace.$bar, baz); }' },
    { code: '.foo { color: darken(#fff, 10%); }' },
    { code: '.foo { color: color(#fff, lighten(10%)); }' },
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
  ],
})
