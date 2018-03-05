module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "prettier",
    "prettier/react"
  ],
  plugins: ["jest", "react", "react-native", "prettier"],
  env: {
    "react-native/react-native": true,
    "jest/globals": true,
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "react/display-name": 0,
    "react/no-unescaped-entities": 0,
    "no-unused-vars": ["error", { args: "none" }],
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        trailingComma: "es5"
      }
    ]
  }
};
