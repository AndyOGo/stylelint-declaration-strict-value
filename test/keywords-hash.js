import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// ignore keywords hash
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [['/color$/', 'fill', 'z-index', 'display'], {
    ignoreKeywords: {
      '/color$/': ['transparent', 'currentColor'],
      'fill': 'inherit',
      'z-index': 0,
      '': 'initial',
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
    { code: '.foo { z-index: 0; }' },
    { code: '.foo { display: initial; }' },
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
    {
      code: '.foo { z-index: 1; }',
      message: `Expected variable, function or keyword for "1" of "z-index" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { display: block; }',
      message: `Expected variable, function or keyword for "block" of "display" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
