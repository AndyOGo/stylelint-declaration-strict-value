/* eslint-disable @typescript-eslint/no-var-requires */
const { getTestRule } = require('jest-preset-stylelint');
const { lint } = require('stylelint');

global.testRule = getTestRule({ plugins: ['./src/index.ts'] });

global.testOptions = testOptions;

function testOptions({ ruleName, config, reject }) {
  // eslint-disable-next-line no-undef
  describe(ruleName, () => {
    // eslint-disable-next-line no-undef
    it('warn for invalid options', async () => {
      const rejections = await Promise.all(
        reject.map(async ({ code, message }) => {
          const {
            results: [{ invalidOptionWarnings }],
          } = await lint({
            code,
            config: {
              plugins: ['./src/index.ts'],
              rules: {
                [ruleName]: config,
              },
            },
          });

          return { message, invalidOptionWarnings };
        })
      );

      rejections.forEach(({ message, invalidOptionWarnings }) => {
        const expectedWarning = {
          text: message,
        };

        // eslint-disable-next-line no-undef
        expect(invalidOptionWarnings[0]).toMatchObject(expectedWarning);
      });
    });
  });
}
