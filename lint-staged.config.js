module.exports = {
  '(src|test)/**/*.[tj]s': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    'node --require babel-register-ts test',
  ],
  '(README).md': ["doctoc --title '**Table of Contents**'"],
};
