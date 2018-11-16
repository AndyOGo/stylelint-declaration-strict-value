import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units
const absoluteUnits = ['px', 'q', 'mm', 'cm', 'in', 'pt', 'pc']
const relativeUnits = ['%', 'em', 'ex', 'ch', 'rem', 'vw', 'vh']

// default config
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [['margin', 'z-index'], {
    ignoreNumbers: true,
  }],

  accept: [
    { code: '.foo { margin: 0; }' },
    ...(absoluteUnits.map(unit => ({ code: `.foo { margin: 10${unit}; }` }))),
    ...(relativeUnits.map(unit => ({ code: `.foo { margin: 10${unit}; }` }))),
    { code: '.foo { margin: 0 0; }' },
    ...(absoluteUnits.map(unit => ({ code: `.foo { margin: 10${unit} 20${unit}; }` }))),
    ...(relativeUnits.map(unit => ({ code: `.foo { margin: 10${unit} 20${unit}; }` }))),
    { code: '.foo { margin: 0 0 0; }' },
    ...(absoluteUnits.map(unit => ({ code: `.foo { margin: 10${unit} 20${unit} 40${unit}; }` }))),
    ...(relativeUnits.map(unit => ({ code: `.foo { margin: 10${unit} 20${unit} 40${unit}; }` }))),
    { code: '.foo { margin: 0 0 0 0; }' },
    ...(absoluteUnits.map(unit => ({ code: `.foo { margin: 10${unit} 20${unit} 40${unit} 50${unit}; }` }))),
    ...(relativeUnits.map(unit => ({ code: `.foo { margin: 10${unit} 20${unit} 40${unit} 50${unit}; }` }))),
    { code: '.foo { z-index: 1000; }' },
  ],

  reject: [
    {
      code: '.foo { margin: inherit; }',
      message: `Expected variable, number or function for "inherit" of "margin" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { margin: o auto; }',
      message: `Expected variable, number or function for "o auto" of "margin" (${ruleName})`,
      line: 1,
      column: 8,
    },
    {
      code: '.foo { z-index: inherit; }',
      message: `Expected variable, number or function for "inherit" of "z-index" (${ruleName})`,
      line: 1,
      column: 8,
    },
  ],
})
