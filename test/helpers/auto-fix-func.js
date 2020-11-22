// eslint-disable-next-line consistent-return, no-unused-vars, @typescript-eslint/no-unused-vars
function autoFixFunc(node, validation, root, config) {
  const { value, prop } = node;

  if (prop === 'color') {
    // eslint-disable-next-line default-case
    switch (value) {
      case '#fff':
        // auto-fix by returned value
        return '$color-white';

      case 'red':
        // auto-fix by PostCSS AST tranformation
        // eslint-disable-next-line no-param-reassign
        node.value = '$color-red';
    }
  }
}

module.exports = autoFixFunc;
