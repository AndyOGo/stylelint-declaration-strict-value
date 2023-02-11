/* eslint-disable @typescript-eslint/no-var-requires */
const { getTestRule } = require('jest-preset-stylelint');

global.testRule = getTestRule({ plugins: ['./src/index.ts'] });
