import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// ignore single value
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreValues: 'transparent',
  }],

  accept: [
    { code: '.foo { color: transparent; }' },
  ],

  reject: [
    {
      code: '.foo { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})

// ignore single value regex
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreValues: '/^#[0-9a-fA-F]{3,6}$/',
  }],

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
})

// ignore single value regex with i flag
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreValues: '/^red$/i',
  }],

  accept: [
    { code: '.foo { color: red; }' },
    { code: '.foo { color: Red; }' },
    { code: '.foo { color: REd; }' },
    { code: '.foo { color: RED; }' },
    { code: '.foo { color: rED; }' },
    { code: '.foo { color: reD; }' },
    { code: '.foo { color: $color; }' },
    { code: '.foo { color: spacing(); }' },
  ],

  reject: [
    {
      code: '.foo { color: inherit; }',
      message: `Expected variable, function or keyword for "inherit" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})

testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreValues: true,
  }],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"ignoreValues":true}" for rule ${ruleName}`,
    },
  ],
})
