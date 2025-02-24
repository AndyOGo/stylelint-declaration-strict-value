import process from 'node:process';
import { ruleName } from './defaults';

// internal warning code
// @see: https://github.com/stylelint/stylelint/blob/3a903800248fcccd4968e8e0dc4a76a4d8b88ff4/lib/utils/emitDeprecationWarning.mjs#L3-L11
const STYLELINT_DEPRECATION_WARNING_PREFIX = 'stylelint:';

type Warning = Error & {
  code: string;
};

/**
 * Quiet all stylelint related deprecation warnings like `context.fix` or `utils.report` API.
 */
export default function unsafeQuietStylelintDeprecationWarning(): void {
  const original = process.emitWarning;
  process.emitWarning = function emitWarning(...args) {
    const [message, options] = args;

    if (
      options &&
      typeof options === 'object' &&
      options?.type === 'DeprecationWarning' &&
      options?.code?.startsWith(STYLELINT_DEPRECATION_WARNING_PREFIX) &&
      ((message &&
        typeof message === 'string' &&
        message?.includes(ruleName)) ||
        options?.detail?.includes(ruleName))
    ) {
      return;
    }

    original.apply(process, args);
  };
}
