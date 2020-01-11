module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/no-commonjs': 'error',
    'no-unused-vars': ["error", { "args": "none" }],
    "require-atomic-updates": "off"
  }
};
