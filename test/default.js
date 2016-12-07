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
  ],
})
