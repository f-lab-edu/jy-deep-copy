/* eslint-disable no-undef */
module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint", "simple-import-sort"],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],

  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },

  overrides: [
    {
      files: ["src/test/**"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      env: {
        "jest/globals": true,
      },
    },
  ],
};
