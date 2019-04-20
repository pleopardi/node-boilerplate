export default {
    env: {
      es6: true,
      jest: true,
      node: true
    },
    extends: ["eslint:recommended", "plugin:jest/recommended"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly"
    },
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: "module"
    },
    plugins: ["jest", "prettier"],
    rules: {
      "prettier/prettier": "error"
    }
  };
  