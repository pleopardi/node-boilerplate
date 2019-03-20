module.exports = {
    "env": {
        "es6": true,
        "jest/globals": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:jest/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["jest", "prettier"],
    "rules": {
        "prettier/prettier": "error"
    }
}; 