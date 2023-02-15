module.exports = {
  '(src|test)/**/*.[tj]s': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    'jest',
  ],
  '(README).md': ["doctoc --title '**Table of Contents**'"],
};
