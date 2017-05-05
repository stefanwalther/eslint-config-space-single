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

describe('main (default)', () => {
	it('is setup correctly', () => {
		const conf = require('../');
		expect(isPlainObj(conf)).to.be.true;
		expect(isPlainObj(conf.rules)).to.be.true;
		expect(runEslint(fixture, conf).length).to.be.equal(0);
    expect(conf.env.node).to.be.true;
    expect(conf.env.browser).to.be.false;
    expect(conf.env.es6).to.be.false;
	});
});

describe('browser', () => {
	it('is setup correctly', () => {
		const conf = require('../browser');
		expect(isPlainObj(conf)).to.be.true;
		expect(isPlainObj(conf.rules)).to.be.true;
		expect(runEslint(fixture, conf).length).to.be.equal(0);
    expect(conf.env.browser).to.be.true;
    expect(conf.env.es6).to.be.false;
    expect(conf.env.node).to.be.false;
	});
});

describe('esnext', () => {
	it('is setup correctly', () => {
		const conf = require('../esnext');
		expect(isPlainObj(conf)).to.be.true;
		expect(isPlainObj(conf.rules)).to.be.true;
		expect(runEslint(fixture, conf).length).to.be.equal(0);
		expect(conf.env.node).to.be.true;
		expect(conf.env.es6).to.be.true;
		expect(conf.env.browser).to.be.false;
	});
});

describe('test', () => {
  it('is setup correctly', () => {
    const conf = require('../test');
    expect(isPlainObj(conf)).to.be.true;
    expect(isPlainObj(conf.rules)).to.be.true;
    expect(runEslint(fixture, conf).length).to.be.equal(0);
    expect(conf.env.node).to.be.true;
    expect(conf.env.es6).to.be.true;
    expect(conf.env.browser).to.be.false;
  });
});
