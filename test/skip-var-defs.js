import { ruleName } from '../src';

// default config
testRule({
  ruleName,

  config: '/color/',

  accept: [
    { code: '$color: 1px;' },
    { code: '@color: 1px;' },
    { code: ':root { --color: 1px; }' },
    { code: '.foo { $color: 1px; }' },
    { code: '.foo { @color: 1px; }' },
    { code: '.foo { --color: 1px; }' },
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
