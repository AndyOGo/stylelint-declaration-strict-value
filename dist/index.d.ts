import { Rule } from 'stylelint';
import { customExpected, expected, failedToFix } from './lib/validation';
import { ruleName } from './defaults';
declare const messages: {
    expected: typeof expected;
    customExpected: typeof customExpected;
    failedToFix: typeof failedToFix;
};
declare const declarationStrictValuePlugin: {
    default?: {
        ruleName: string;
        rule: Rule<any, any>;
    } | undefined;
} | {
    ruleName: string;
    rule: Rule<any, any>;
};
export default declarationStrictValuePlugin;
export { ruleName, messages };
