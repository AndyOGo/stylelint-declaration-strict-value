import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// ignore unlisted properties
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    message: 'Custom expected ${types} for "${value}" of "${property}"', // eslint-disable-line no-template-curly-in-string
  }],

  reject: [
    {
      code: '.foo { color: #fff; }',
      message: `Custom expected variable or function for "#fff" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Custom expected variable or function for "red" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
