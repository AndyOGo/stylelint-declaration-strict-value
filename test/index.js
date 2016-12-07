import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

testRule(declarationStrictValue.rule, {
  ruleName,
  skipBasicChecks: true,

  config: 'color',

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected variable or function for #fff of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Expected variable or function for red of color (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: darken( #fff, 10%); }',
      message: `Expected variable or function for darken( #fff, 10%) of color (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
