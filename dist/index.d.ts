import stylelint from 'stylelint';
import { customExpected, expected, failedToFix } from './lib/validation';
import { ruleName } from './defaults';
declare const messages: {
    expected: typeof expected;
    customExpected: typeof customExpected;
    failedToFix: typeof failedToFix;
};
declare const declarationStrictValuePlugin: stylelint.Plugin;
export default declarationStrictValuePlugin;
export { ruleName, messages };
