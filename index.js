module.exports = {
  extends: [
    require.resolve('stylelint-config-standard')
  ],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'function-url-no-scheme-relative': true, // use https!
    'function-url-quotes': "always",
    'max-nesting-depth': 3,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-attribute-quotes': "always",
    'selector-no-id': true,
    'selector-no-vendor-prefix': true,
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,
  }
}
