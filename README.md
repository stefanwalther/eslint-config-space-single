# eslint-config-space-single

> Sharable ESLint config, based on xo-space, but with single quotes + some additional settings.

## Install

```sh
$npm install --save-dev eslint-config-space-single
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "extends": "eslint-config-space-single"
  }
}
```

Or to `.eslintrc`:

```json
{
  "extends": "eslint-config-space-single"
}
```

Supports parsing ES6+, but this is not the default.

This package also exposes [`eslint-config-space-single/esnext`](esnext.js) if you want ES6+ rules:

```json
{
  "extends": "eslint-config-space-single/esnext"
}
```

And [`eslint-config-space-single/browser`](browser.js) if you're in the browser:

```json
{
  "extends": "eslint-config-space-single/browser"
}
```

## Some Helpers

### package.json scripts

Here are some package.json snippets I use to harmonize handling of eslinting across projects:

```sh
"scripts": {
  "lint": "eslint src && eslint test",
  "lint:fix": "eslint src --fix && eslint test --fix",
  "lint:src": "eslint src",
  "lint:src:fix": "eslint src --fix",
  "lint:test": "eslint test",
  "lint:text:fix": "eslint test --fix"
}
```

Then just run e.g. `yarn lint:src:fix` or `npm run lint:src:fix`.

## Related Projects

- [eslint-config-xo-space](https://www.npmjs.com/package/eslint-config-xo-space): ESLint shareable config for XO with 2-space indent | [homepage](https://github.com/sindresorhus/eslint-config-xo-space#readme "ESLint shareable config for XO with 2-space indent")
- [eslint](https://www.npmjs.com/package/eslint): An AST-based pattern checker for JavaScript. | [homepage](http://eslint.org "An AST-based pattern checker for JavaScript.")

## About

### Author

**Stefan Walther**

* [github/stefanwalther](https://github.com/stefanwalther)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)

## License
MIT

