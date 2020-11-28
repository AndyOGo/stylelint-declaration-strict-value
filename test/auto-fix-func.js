import testRule from 'stylelint-test-rule-tape';

import declarationStrictValue, { ruleName } from '../src';
import autoFixFunc from './helpers/auto-fix-func';

const { rule } = declarationStrictValue;

const ruleWithContext = (context) => (properties, options) =>
  rule(properties, options, context);

// autofix by function property
testRule(
  ruleWithContext({
    fix: true,
  }),
  {
    ruleName,
    skipBasicChecks: true,

    config: [
      'color',
      {
        autoFixFunc,
      },
    ],

    accept: [
      { code: '.foo { color: #fff; }' },
      { code: '.foo { color: red; }' },
    ],
  }
);

// autofix by function property disabled
testRule(
  ruleWithContext({
    fix: true,
  }),
  {
    ruleName,
    skipBasicChecks: true,

    config: [
      'color',
      {
        autoFixFunc,
        disableFix: true,
      },
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
  }
);

// autofix by file exporting function
testRule(
  ruleWithContext({
    fix: true,
  }),
  {
    ruleName,
    skipBasicChecks: true,

    config: [
      'color',
      {
        autoFixFunc: './test/helpers/auto-fix-func.js',
      },
    ],

    accept: [
      { code: '.foo { color: #fff; }' },
      { code: '.foo { color: red; }' },
    ],
  }
);

// autofix by file exporting function disabled
testRule(
  ruleWithContext({
    fix: true,
  }),
  {
    ruleName,
    skipBasicChecks: true,

    config: [
      'color',
      {
        autoFixFunc: './test/helpers/auto-fix-func.js',
        disableFix: true,
      },
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
  }
);

testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    'color',
    {
      autoFixFunc: true,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"autoFixFunc":true}" for rule ${ruleName}`,
    },
  ],
});

testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    'color',
    {
      disableFix: 1234,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"disableFix":1234}" for rule ${ruleName}`,
    },
  ],
});
