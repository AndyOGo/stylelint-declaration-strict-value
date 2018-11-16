import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// default config
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: '/color/',

  accept: [
    { code: '.foo { color: $bar + $baz; }' },
    { code: '.foo { color: @bar + @baz; }' },
    { code: '.foo { color: var(--bar) + var(--baz); }' },
    { code: '.foo { color: $bar - $baz; }' },
    { code: '.foo { color: @bar - @baz; }' },
    { code: '.foo { color: var(--bar) - var(--baz); }' },
    { code: '.foo { color: $bar * $baz; }' },
    { code: '.foo { color: @bar * @baz; }' },
    { code: '.foo { color: var(--bar) * var(--baz); }' },
    { code: '.foo { color: $bar / $baz; }' },
    { code: '.foo { color: @bar / @baz; }' },
    { code: '.foo { color: var(--bar) / var(--baz); }' },
  ],

  reject: [
    {
      code: '.foo { color: +; }',
      message: `Expected variable or function for "+" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: -; }',
      message: `Expected variable or function for "-" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    // https://github.com/shellscape/postcss-values-parser/issues/58
    // {
    //   code: '.foo { color: *; }',
    //   message: `Expected variable or function for "*" of "color" (${ruleName})`,
    //   line: 1,
    //   column: 8,
    // },
    // {
    //   code: '.foo { color: /; }',
    //   message: `Expected variable or function for "/" of "color" (${ruleName})`,
    //   line: 1,
    //   column: 8,
    // },
  ],
})
