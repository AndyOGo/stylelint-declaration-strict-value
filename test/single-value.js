import { ruleName } from '../src';

// ignore single value
testRule({
  ruleName,

  config: [
    'color',
    {
      ignoreValues: 'transparent',
    },
  ],

  accept: [{ code: '.foo { color: transparent; }' }],

  reject: [
    {
      code: '.foo { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

testRule({
  ruleName,

  config: [
    '/color/',
    {
      ignoreValues: 'transparent',
    },
  ],

  accept: [
    { code: '.foo { scrollbar-color: var(--color) transparent;  }' },
    { code: '.foo { scrollbar-color: $color transparent; }' },
    { code: '.foo { scrollbar-color: transparent @color; }' },
    { code: '.foo { scrollbar-color: transparent darken(#fff, 10%); }' },
    {
      code: '.foo { scrollbar-color: transparent darken(var(--color), 10%); }',
    },
  ],

  reject: [
    {
      code: '.foo { scrollbar-color: var(--color) inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "scrollbar-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

// ignore single value regex
testRule({
  ruleName,

  config: [
    'color',
    {
      ignoreValues: '/^#[0-9a-fA-F]{3,6}$/',
    },
  ],

  accept: [
    { code: '.foo { color: #fff; }' },
    { code: '.foo { color: #ffffff; }' },
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

// ignore single value regex with i flag
testRule({
  ruleName,

  config: [
    'color',
    {
      ignoreValues: '/^red$/i',
    },
  ],

  accept: [
    { code: '.foo { color: red; }' },
    { code: '.foo { color: Red; }' },
    { code: '.foo { color: REd; }' },
    { code: '.foo { color: RED; }' },
    { code: '.foo { color: rED; }' },
    { code: '.foo { color: reD; }' },
    { code: '.foo { color: $color; }' },
    { code: '.foo { color: spacing(); }' },
    { code: '.foo { color: red; } .bar { color: RED; }' },
  ],

  reject: [
    {
      code: '.foo { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; } .bar { color: RED; } .baz { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 50,
    },
  ],
});

testRule({
  ruleName,

  config: [
    'color',
    {
      ignoreValues: true,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"ignoreValues":true}" for rule "${ruleName}"`,
    },
  ],
});
