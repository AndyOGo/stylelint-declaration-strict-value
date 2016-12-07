import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// ignore keywords hash
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [['/color$/', 'fill'], {
    ignoreKeywords: {
      '/color$/': ['transparent', 'currentColor'],
      'fill': 'inherit',
    },
  }],

  accept: [
    { code: '.foo { color: transparent; }' },
    { code: '.foo { color: currentColor; }' },
    { code: '.foo { background-color: transparent; }' },
    { code: '.foo { background-color: currentColor; }' },
    { code: '.foo { border-color: transparent; }' },
    { code: '.foo { border-color: currentColor; }' },
    { code: '.foo { fill: inherit; }' },
  ],

  reject: [
    {
      code: '.foo { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { fill: currentColor; }',
      message: `Expected variable, function or keyword for "currentColor" of "fill" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
