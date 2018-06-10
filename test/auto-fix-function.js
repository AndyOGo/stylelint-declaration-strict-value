import testRule from 'stylelint-test-rule-tape'

import declarationStrictValue, { ruleName } from '../src'

const { rule } = declarationStrictValue

// ignore unlisted properties
testRule(rule, {
  ruleName,
  skipBasicChecks: true,

  config: [
    ["/margin/", "/padding/"], {
    "disableFix": false,
    "autofixFunc": function(){
      console.log("lalalal");
    },
    fix: true
  }],

  reject: [
    { code: 'a { margin: 10px 10px 10px 10px }' }
  ],
})
