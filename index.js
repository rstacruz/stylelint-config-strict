module.exports = {
  extends: [
    require.resolve('stylelint-config-standard')
  ],
  rules: {
    'function-url-quotes': "always",
    'selector-attribute-quotes': "always",
    'selector-no-id': true,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'single',
    'value-keyword-case': "lower",
  }
}
