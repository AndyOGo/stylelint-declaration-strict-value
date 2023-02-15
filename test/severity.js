import { ruleName } from '../src';

// custom message
testRule({
  ruleName,

  config: [
    'color',
    {
      severity: 'warning',
    },
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
});

testOptions({
  skip: true,
  ruleName,

  config: [
    'color',
    {
      severity: 1234,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"severity":1234}" for rule "${ruleName}"`,
    },
  ],
});
