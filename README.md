# stylelint-config-strict

> Extra rules for stylelint-config-standard

This extends the rules of [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) with some stricter rules.

- No vendor prefixes
- Use single quotes whenever possible
- No styling of `#id`s

## Install

```
npm install --save @rstacruz/stylelint-config-strict
```

```js
// .stylelintrc
{
  "extends": [
    "@rstacruz/stylelint-config-strict"
  ]
}
```

## Thanks

**stylelint-config-strict** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/stylelint-config-strict/contributors
