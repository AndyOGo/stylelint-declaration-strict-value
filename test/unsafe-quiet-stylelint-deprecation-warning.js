import process from 'node:process';
import unsafeQuietStylelintDeprecationWarning from '../src/unsafe-quiet-stylelint-deprecation-warning';
import { ruleName } from '../src/defaults';

describe('quietContextFixDeprecationWarning', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('quiets context.fix dewprecation warnings', () => {
    const emitWarningSpy = jest.spyOn(process, 'emitWarning');

    unsafeQuietStylelintDeprecationWarning();

    process.emitWarning(ruleName, {
      type: 'DeprecationWarning',
      code: 'stylelint:005',
    });

    expect(emitWarningSpy).not.toHaveBeenCalled();
  });

  it('quiets utils.report dewprecation warnings', () => {
    const emitWarningSpy = jest.spyOn(process, 'emitWarning');

    unsafeQuietStylelintDeprecationWarning();

    process.emitWarning(ruleName, {
      type: 'DeprecationWarning',
      code: 'stylelint:007',
    });

    expect(emitWarningSpy).not.toHaveBeenCalled();
  });

  it('re-emits unrelated warnings', () => {
    const emitWarningSpy = jest.spyOn(process, 'emitWarning');

    unsafeQuietStylelintDeprecationWarning();

    process.emitWarning('foo', {
      type: 'DeprecationWarning',
      code: 'bar',
    });

    expect(emitWarningSpy).toHaveBeenCalled();
    expect(emitWarningSpy).toHaveBeenCalledTimes(1);
  });
});
