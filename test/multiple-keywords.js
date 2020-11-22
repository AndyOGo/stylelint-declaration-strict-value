import testRule from 'stylelint-test-rule-tape';

import declarationStrictValue, { ruleName } from '../src';

const { rule } = declarationStrictValue;

// ignore multiple keywords
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    'color',
    {
      ignoreKeywords: ['transparent', 'currentColor', 'blue'],
    },
  ],

  accept: [
    { code: '.foo { color: transparent; }' },
    { code: '.foo { color: currentColor; }' },
    { code: '.foo { color: blue; }' },
  ],

  reject: [
    {
      code: '.foo { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});
