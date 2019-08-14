module.exports = {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'quasar'
  ],
  rules: {
    'quasar/no-legacy-components': 'off',
    'quasar/no-legacy-css': 'off',
    'quasar/no-legacy-directives': 'off',
    'quasar/no-legacy-pluins': 'off',
    'quasar/no-legacy-other': 'off',
    'quasar/no-legacy-properties': 'off'
  }
}
