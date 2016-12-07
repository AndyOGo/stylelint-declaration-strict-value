import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// array of properties
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [['color', 'font-size', 'fill']],

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { font-size: $bar; }' },
    { code: '.foo { font-size: @bar; }' },
    { code: '.foo { font-size: var(--bar); }' },
    { code: '.foo { fill: $bar; }' },
    { code: '.foo { fill: @bar; }' },
    { code: '.foo { fill: var(--bar); }' },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Expected variable or function for "#fff" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { font-size: 16px; }',
      message: `Expected variable or function for "16px" of "font-size" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { fill: #fff; }',
      message: `Expected variable or function for "#fff" of "fill" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
