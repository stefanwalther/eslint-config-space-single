module.exports = {
  extends: 'xo-space',
  "env": {
    "node": true,
    "es6": true,
    "mocha": true,
    "browser": false
  },
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "no-inline-comments": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-unused-expressions": "off"
  }
};
