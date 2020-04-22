import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// ignore single value
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreValues: 'transparent',
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

// ignore single value regex
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreValues: '/^#\\d{3,6}/$',
  }],

  accept: [
    { code: '.foo { color: #fff; }' },
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
