module.exports = {
  "extends": ["eslint:recommended"],
  "env": {
    "browser": true,
    "es6": false
  },
  "globals": {
    "angular": true
  },

  // Rule values:
  // 0: disable the rule completely
  // 1: enable the rule as a warning
  // 2: enable the rule as an error
  "rules": {
    // Strict mode:
    "strict": [1, "function"],

    // Good practice:
    "brace-style": 1,
    "curly": 2,
    "eqeqeq": 1,
    "no-multiple-empty-lines": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undefined": 0,
    "no-unused-vars": 2,
    "one-var": 1,
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "guard-for-in": 1,
    "no-eval": 2,
    "no-dupe-args": 2, // disallow duplicate arguments in functions
    "no-dupe-keys": 2, // disallow duplicate keys when creating object literals

    // Stylistic choices you may wish to change to match the project:
    "camelcase": 2,
    "indent": [2, 2],
    "linebreak-style": [2, "unix"]
  }
};
