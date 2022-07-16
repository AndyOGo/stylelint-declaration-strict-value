import stylelint from 'stylelint';
import { expected, failedToFix } from './lib/validation';
import { ruleName } from './defaults';
declare const messages: {
    expected: typeof expected;
    failedToFix: typeof failedToFix;
};
declare const declarationStrictValuePlugin: {
    ruleName: string;
    rule: stylelint.Rule<any, any>;
};
export default declarationStrictValuePlugin;
export { ruleName, messages };
