module.exports = {
  extends: require.resolve('./essential'),
  rules: {
    // other rules to be added here
    'quasar/no-invalid-qfield-usage': 'error',
    'quasar/no-invalid-props': 'error'
  }
}
