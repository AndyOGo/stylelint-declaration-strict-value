import { expected } from './lib/validation';
import { ruleName } from './defaults';
declare const messages: {
    expected: typeof expected;
};
declare const declarationStrictValuePlugin: any;
export default declarationStrictValuePlugin;
export { ruleName, messages };
