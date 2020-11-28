import testRule from 'stylelint-test-rule-tape';

import declarationStrictValue, { ruleName } from '../src';

const { rule } = declarationStrictValue;

// RegExp properties
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: '/color$/',

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: namespace.$bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { background-color: $bar; }' },
    { code: '.foo { background-color: namespace.$bar; }' },
    { code: '.foo { background-color: @bar; }' },
    { code: '.foo { background-color: var(--bar); }' },
    { code: '.foo { border-color: $bar; }' },
    { code: '.foo { border-color: namespace.$bar; }' },
    { code: '.foo { border-color: @bar; }' },
    { code: '.foo { border-color: var(--bar); }' },
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
    {
      code: '.foo { background-color: #fff; }',
      message: `Expected variable or function for "#fff" of "background-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background-color: red; }',
      message: `Expected variable or function for "red" of "background-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border-color: #fff; }',
      message: `Expected variable or function for "#fff" of "border-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border-color: red; }',
      message: `Expected variable or function for "red" of "border-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

// RegExp properties with i flag
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: '/color$/i',

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: namespace.$bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { background-color: $bar; }' },
    { code: '.foo { background-color: namespace.$bar; }' },
    { code: '.foo { background-color: @bar; }' },
    { code: '.foo { background-color: var(--bar); }' },
    { code: '.foo { border-color: $bar; }' },
    { code: '.foo { border-color: namespace.$bar; }' },
    { code: '.foo { border-color: @bar; }' },
    { code: '.foo { border-color: var(--bar); }' },
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
    {
      code: '.foo { background-color: #fff; }',
      message: `Expected variable or function for "#fff" of "background-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { background-color: red; }',
      message: `Expected variable or function for "red" of "background-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border-color: #fff; }',
      message: `Expected variable or function for "#fff" of "border-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { border-color: red; }',
      message: `Expected variable or function for "red" of "border-color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});
