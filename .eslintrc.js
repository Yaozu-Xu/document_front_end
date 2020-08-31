module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "airbnb-base",
    "plugin:css-modules/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/vue",
  ],
  plugins: ["prettier", "css-modules"],
  rules: { "prettier/prettier": "error" },
};
