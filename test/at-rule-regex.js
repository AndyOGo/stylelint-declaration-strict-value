import { ruleName } from '../src';

// ignore keywords hash
testRule({
  ruleName,

  config: [
    ['font-weight'],
    {
      ignoreAtRules: '/@font-face|@media/',
    },
  ],

  accept: [
    { code: '@font-face { font-weight: 500; }' },
    { code: '@media (min-width: 100px) { font-weight: 500; }' },
  ],

  reject: [
    {
      code: '.foo { font-weight: 500; }',
      message: `Expected variable or function for "500" of "font-weight" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});
