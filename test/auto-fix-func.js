import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// eslint-disable-next-line consistent-return, no-unused-vars
function autoFixFunc(node, validation, root, config) {
  const { value, prop } = node

  if (prop === 'color') {
    // eslint-disable-next-line default-case
    switch (value) {
      case '#fff':
        // auto-fix by returned value
        return '$color-white'

      case 'red':
        // auto-fix by PostCSS AST tranformation
        // eslint-disable-next-line no-param-reassign
        node.value = '$color-red'
    }
  }
}

// default config
testRule(rule, {
  ruleName,
  skipBasicChecks: true,
  fix: true,

  config: ['color', {
    autoFixFunc,
  }],

  accept: [
    { code: '.foo { color: $bar; }' },
    { code: '.foo { color: @bar; }' },
    { code: '.foo { color: var(--bar); }' },
    { code: '.foo { color: -$bar; }' },
    { code: '.foo { color: -@bar; }' },
    { code: '.foo { color: -var(--bar); }' },
    { code: '.foo { color: map-get($bar, baz); }' },
    { code: '.foo { color: darken(#fff, 10%); }' },
    { code: '.foo { color: color(#fff, lighten(10%)); }' },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      fixed: '.foo { color: $color-white; }',
      message: `Expected variable or function for "#fff" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      fixed: '.foo { color: $color-red; }',
      message: `Expected variable or function for "red" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
