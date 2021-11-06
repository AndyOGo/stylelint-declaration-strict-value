import stylelint from 'stylelint';
import { expected } from './lib/validation';
import { ruleName } from './defaults';
declare const messages: {
    expected: typeof expected;
};
declare const declarationStrictValuePlugin: {
    ruleName: string;
    rule: stylelint.Rule<any, any>;
};
export default declarationStrictValuePlugin;
export { ruleName, messages };
