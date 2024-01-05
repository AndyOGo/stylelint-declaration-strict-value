module.exports = {
  '(src|test)/**/*.[tj]s': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    'cross-env NODE_OPTIONS="--experimental-vm-modules --no-warnings" jest',
  ],
  '(README).md': ["doctoc --title '**Table of Contents**'"],
};
