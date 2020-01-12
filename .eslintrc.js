module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
