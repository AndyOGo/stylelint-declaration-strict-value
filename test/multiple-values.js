import { ruleName } from '../src';

// ignore multiple keywords
testRule({
  ruleName,

  config: [
    'color',
    {
      ignoreValues: ['transparent', '/^#[0-9a-fA-F]{3,6}$/', '/^red$/i'],
    },
  ],

  accept: [
    { code: '.foo { color: transparent; }' },
    { code: '.foo { color: #fff; }' },
    { code: '.foo { color: #ffffff; }' },
    { code: '.foo { color: red; }' },
    { code: '.foo { color: Red; }' },
    { code: '.foo { color: REd; }' },
    { code: '.foo { color: RED; }' },
    { code: '.foo { color: rED; }' },
    { code: '.foo { color: reD; }' },
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
