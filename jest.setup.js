import { getTestRule } from 'jest-preset-stylelint';
// eslint-disable-next-line import/extensions
import declarationStrictValuePlugin from './src/index.ts';

const plugins = [declarationStrictValuePlugin];

global.testRule = getTestRule({ plugins });
