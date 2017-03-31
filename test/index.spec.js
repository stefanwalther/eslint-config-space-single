const eslint = require('eslint');
const isPlainObj = require('is-plain-obj');
const tempWrite = require('temp-write');

const fixture = `'use strict';\nconst x = true;\n\nif (x) {\n  console.log();\n}\n`;
function runEslint(str, conf) {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: tempWrite.sync(JSON.stringify(conf))
	});

	return linter.executeOnText(str).results[0].messages;
}

describe('main', () => {
	it('', () => {
		const conf = require('../');
		expect(isPlainObj(conf)).to.be.true;
		expect(isPlainObj(conf.rules)).to.be.true;
		expect(runEslint(fixture, conf).length).to.be.equal(0);
	});
});

describe('browser', () => {
	it('', () => {
		const conf = require('../browser');
		expect(isPlainObj(conf)).to.be.true;
		expect(isPlainObj(conf.rules)).to.be.true;
		expect(runEslint(fixture, conf).length).to.be.equal(0);
	});
});

describe('esnext', () => {
	it('', () => {
		const conf = require('../esnext');
		expect(isPlainObj(conf)).to.be.true;
		expect(isPlainObj(conf.rules)).to.be.true;
		expect(runEslint(fixture, conf).length).to.be.equal(0);
		expect(conf.env.node).to.be.true;
		expect(conf.env.es6).to.be.true;
		expect(conf.env.browser).to.not.exist;
	});
});
