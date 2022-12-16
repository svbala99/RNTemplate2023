module.exports = {
  env: {
    node: true,
    es2021: true,
    'react-native/react-native': true,
    "jest": true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  overrides: [
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'global-require': 'off',
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  },
};
