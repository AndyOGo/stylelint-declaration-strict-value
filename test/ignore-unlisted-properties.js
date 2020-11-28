import testRule from 'stylelint-test-rule-tape';

import declarationStrictValue, { ruleName } from '../src';

const { rule } = declarationStrictValue;

// ignore unlisted properties
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: 'color',

  accept: [
    { code: '.foo { display: block; }' },
    { code: '.foo { position: absolute; }' },
  ],
});
