import { ruleName } from '../src';

// ignore unlisted properties
testRule({
  ruleName,

  config: 'color',

  accept: [
    { code: '.foo { display: block; }' },
    { code: '.foo { position: absolute; }' },
  ],
});
