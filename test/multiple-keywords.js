import { ruleName } from '../src';

// ignore multiple keywords
testRule({
  ruleName,

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
