module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 11,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:cypress/recommended",
  ],
  plugins: ["prettier", "sonarjs", "cypress"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["./src/"],
        alias: { "@": "./src/" },
      },
    },
  },
};
