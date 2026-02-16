import { ruleName } from '../src';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const autoFixFunc = require('./helpers/auto-fix-func.cjs');
const autoFixFuncWithThrow = require('./helpers/auto-fix-func-with-throw.cjs');

// works if autofix is omitted
testRule({
  ruleName,

  config: ['color'],

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
  ],
});

// autofix by function property
testRule({
  ruleName,
  fix: true,

  config: [
    ['color', 'font-size', 'display'],
    {
      autoFixFunc: autoFixFuncWithThrow,
    },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      fixed: '.foo { color: $color-white; }',
      message: `Expected variable or function for "#fff" of "color" (scale-unlimited/declaration-strict-value)`,
    },
    {
      code: '.foo { color: red; }',
      fixed: '.foo { color: $color-red; }',
      message: `Expected variable or function for "red" of "color" (scale-unlimited/declaration-strict-value)`,
    },
    {
      code: '.foo { font-size: 16px; }',
      unfixable: true,
      message: `Expected variable or function for "16px" of "font-size" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: blue; }',
      unfixable: true,
      message: `Expected variable or function for "blue" of "color" (scale-unlimited/declaration-strict-value)`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { display: block; }',
      unfixable: true,
      message: `Expected variable or function for "block" of "display" (scale-unlimited/declaration-strict-value)`,
      line: 1,
      column: 8,
    },
  ],
});

testCustomAutoFixMessage({
  ruleName,
  fix: true,

  config: [
    ['color', 'font-size', 'display'],
    {
      autoFixFunc: autoFixFuncWithThrow,
    },
  ],

  reject: [
    {
      code: '.foo { font-size: 16px; }',
      message: `"font-size" is not a color property (${ruleName})`,
    },
    {
      code: '.foo { color: blue; }',
      message: `Can't fix color "blue" (${ruleName})`,
    },
    {
      code: '.foo { display: block; }',
      message: `Property "display" with value "block" can't be autofixed (${ruleName})`,
    },
  ],
});

// autofix by function property disabled
testRule({
  ruleName,
  fix: true,

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
      unfixable: true,
      message: `Expected variable or function for "#fff" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      unfixable: true,
      message: `Expected variable or function for "red" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

// autofix by file exporting function
testRule({
  ruleName,
  fix: true,

  config: [
    'color',
    {
      autoFixFunc: './test/helpers/auto-fix-func.cjs',
    },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      fixed: '.foo { color: $color-white; }',
      message: `Expected variable or function for "#fff" of "color" (${ruleName})`,
    },
    {
      code: '.foo { color: red; }',
      fixed: '.foo { color: $color-red; }',
      message: `Expected variable or function for "red" of "color" (${ruleName})`,
    },
  ],
});

// autofix by file exporting function disabled
testRule({
  ruleName,
  fix: true,

  config: [
    'color',
    {
      autoFixFunc: './test/helpers/auto-fix-func.cjs',
      disableFix: true,
    },
  ],

  reject: [
    {
      code: '.foo { color: #fff; }',
      unfixable: true,
      message: `Expected variable or function for "#fff" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { color: red; }',
      unfixable: true,
      message: `Expected variable or function for "red" of "color" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
});

testRule({
  ruleName,

  config: [
    'color',
    {
      autoFixFunc: true,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"autoFixFunc":true}" for rule "${ruleName}"`,
    },
  ],
});

testRule({
  ruleName,

  config: [
    'color',
    {
      disableFix: 1234,
    },
  ],

  reject: [
    {
      code: '.foo { color: red; }',
      message: `Invalid option "{"disableFix":1234}" for rule "${ruleName}"`,
    },
  ],
});
