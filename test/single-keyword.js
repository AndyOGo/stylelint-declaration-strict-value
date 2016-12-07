import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// ignore single keyword
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreKeywords: 'transparent',
  }],

  accept: [
    { code: '.foo { color: transparent; }' },
  ],

  reject: [
    {
      code: '.foo { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
