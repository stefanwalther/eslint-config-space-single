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

### Author

**Stefan Walther**

* [github/stefanwalther](https://github.com/stefanwalther)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)

## License
MIT

