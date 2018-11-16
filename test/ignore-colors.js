import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// disabling ignoreFunction
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: ['color', {
    ignoreColors: true,
    ignoreFunctions: false,
  }],

  accept: [
    { code: '.foo { color: #fff; }' },
    { code: '.foo { color: #f00f; }' },
    { code: '.foo { color: #ffffff; }' },
    { code: '.foo { color: #ff0000ff; }' },
  ],

  reject: [
    {
      code: '.foo { color: currentColor; }',
      message: `Expected variable or color for "currentColor" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      message: `Expected variable or color for "red" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: map-get($bar, $baz); }',
      message: `Expected variable or color for "map-get($bar, $baz)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: darken(#fff, 10%); }',
      message: `Expected variable or color for "darken(#fff, 10%)" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: color(#fff, lighten(10%)); }',
      message: `Expected variable or color for "color(#fff, lighten(10%))" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
