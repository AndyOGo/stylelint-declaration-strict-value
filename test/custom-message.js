import { ruleName } from '../src';

// custom message
testRule({
  ruleName,

  config: [
    'color',
    {
      // eslint-disable-next-line no-template-curly-in-string
      message: 'Custom expected ${types} for "${value}" of "${property}"',
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

testRule({
  ruleName,

  config: [
    ['/color$/', 'fill', 'stroke'],
    {
      ignoreVariables: false,
      // eslint-disable-next-line no-template-curly-in-string
      message: 'Custom expected ${types} for "${value}" of "${property}"',
    },
  ],

  reject: [
    {
      code: '.foo { color: $red; }',
      message: `Custom expected function for "$red" of "color" (${ruleName})`,
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
      message: 1234,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"message":1234}" for rule "${ruleName}"`,
    },
  ],
});
