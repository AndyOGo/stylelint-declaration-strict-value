import testRule from 'stylelint-test-rule-tape';

import declarationStrictValue, { ruleName } from '../src';

const { rule } = declarationStrictValue;

// ignore single keyword
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    'color',
    {
      ignoreKeywords: 'transparent',
    },
  ],

  accept: [
    { code: '.foo { color: transparent; }' },
    { code: '.foo { color: $color; }' },
    { code: '.foo { color: spacing(); }' },
    { code: '.foo { color: transparent; } .bar { color: transparent; }' },
  ],

  reject: [
    {
      code: '.foo { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code:
        '.foo { color: transparent; } .bar { color: transparent; } .baz { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 66,
    },
  ],
});

testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    '/color/',
    {
      ignoreKeywords: 'transparent',
    },
  ],

  accept: [
    { code: '.foo { scrollbar-color: var(--color) transparent; }' },
    { code: '.foo { scrollbar-color: $color transparent; }' },
    { code: '.foo { scrollbar-color: transparent @color; }' },
    { code: '.foo { scrollbar-color: transparent darken(#fff, 10%); }' },
    {
      code: '.foo { scrollbar-color: transparent darken(var(--color), 10%); }',
    },
    { code: '.foo { border-color: $color; }' },
  ],

  reject: [
    {
      code: '.foo { scrollbar-color: var(--color) inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "scrollbar-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code:
        '.foo { color: transparent; } .bar { color: transparent; } .baz { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 66,
    },
  ],
});

testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    'color',
    {
      ignoreKeywords: true,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"ignoreKeywords":true}" for rule ${ruleName}`,
    },
  ],
});
