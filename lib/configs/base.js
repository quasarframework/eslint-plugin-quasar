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
    // other rules to be added here
    // 'quasar/attribute-check': 'error',
  }
}
