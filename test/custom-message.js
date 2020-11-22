import testRule from 'stylelint-test-rule-tape';

import declarationStrictValue, { ruleName } from '../src';

const { rule } = declarationStrictValue;

// custom message
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    'color',
    {
      message: 'Custom expected ${types} for "${value}" of "${property}"', // eslint-disable-line no-template-curly-in-string
    },
  ],

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
});

testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    'color',
    {
      message: 1234,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"message":1234}" for rule ${ruleName}`,
    },
  ],
});
