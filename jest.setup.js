import { getTestRule } from 'jest-preset-stylelint';
import { lint } from 'stylelint';
// eslint-disable-next-line import/extensions
import declarationStrictValuePlugin from './src/index.ts';

const plugins = [declarationStrictValuePlugin];

global.testRule = getTestRule({ plugins });

global.testCustomAutoFixMessage = testCustomAutoFixMessage;

function testCustomAutoFixMessage({ ruleName, config, reject, fix }) {
  // eslint-disable-next-line no-undef
  describe(ruleName, () => {
    // eslint-disable-next-line no-undef
    it('warn for invalid options', async () => {
      const rejections = await Promise.all(
        reject.map(async ({ code, message }) => {
          const {
            results: [{ warnings }],
          } = await lint({
            fix,
            code,
            config: {
              plugins,
              rules: {
                [ruleName]: config,
              },
            },
            quietDeprecationWarnings: true,
          });

          return { message, warnings };
        })
      );

      rejections.forEach(({ message, warnings }) => {
        const expectedWarning = {
          text: message,
        };

        // eslint-disable-next-line no-undef
        expect(warnings[0]).toMatchObject(expectedWarning);
      });
    });
  });
}
