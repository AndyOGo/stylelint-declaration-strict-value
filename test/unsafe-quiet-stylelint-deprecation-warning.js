import { jest } from '@jest/globals';
import process from 'node:process';
import unsafeQuietStylelintDeprecationWarning from '../src/unsafe-quiet-stylelint-deprecation-warning';
import { ruleName } from '../src/defaults';

describe('quietContextFixDeprecationWarning', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('quiets context.fix deprecation warnings by message', () => {
    const emitWarningSpy = jest.spyOn(process, 'emitWarning');

    unsafeQuietStylelintDeprecationWarning();

    process.emitWarning(ruleName, {
      type: 'DeprecationWarning',
      code: 'stylelint:005',
    });

    expect(emitWarningSpy).not.toHaveBeenCalled();
  });

  it('quiets context.fix deprecation warnings by options.detail', () => {
    const emitWarningSpy = jest.spyOn(process, 'emitWarning');

    unsafeQuietStylelintDeprecationWarning();

    process.emitWarning('', {
      type: 'DeprecationWarning',
      code: 'stylelint:005',
      detail: ruleName,
    });

    expect(emitWarningSpy).not.toHaveBeenCalled();
  });

  it('quiets utils.report deprecation warnings by message', () => {
    const emitWarningSpy = jest.spyOn(process, 'emitWarning');

    unsafeQuietStylelintDeprecationWarning();

    process.emitWarning(ruleName, {
      type: 'DeprecationWarning',
      code: 'stylelint:007',
    });

    expect(emitWarningSpy).not.toHaveBeenCalled();
  });

  it('quiets utils.report deprecation warnings by options.detail', () => {
    const emitWarningSpy = jest.spyOn(process, 'emitWarning');

    unsafeQuietStylelintDeprecationWarning();

    process.emitWarning('', {
      type: 'DeprecationWarning',
      code: 'stylelint:007',
      detail: ruleName,
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
