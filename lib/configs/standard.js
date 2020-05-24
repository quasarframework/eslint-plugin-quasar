module.exports = {
  extends: require.resolve('./recommended'),
  rules: {
    // other rules to be added here
    'quasar/no-invalid-qfield-usage': 'warn',
    'quasar/no-invalid-props': 'warn'
  }
}
