module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'require-jsdoc': 0,
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 0,
    'max-line-length': [
      true,
      240
    ],
  },
  'settings': {
    'import/resolver': {
      'typescript': {},
    },
  },
};
