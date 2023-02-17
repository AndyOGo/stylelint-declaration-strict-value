/* eslint-disable @typescript-eslint/no-var-requires */
const { getTestRule } = require('jest-preset-stylelint');
const { lint } = require('stylelint');

global.testRule = getTestRule({ plugins: ['./src/index.ts'] });

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
              plugins: ['./src/index.ts'],
              rules: {
                [ruleName]: config,
              },
            },
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
