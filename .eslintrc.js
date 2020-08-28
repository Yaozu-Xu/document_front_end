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
    "plugin:prettier/recommended",
    "plugin:css-modules/recommended",
  ],
  plugins: ["prettier", "css-modules"],
  // add your custom rules here
  rules: {
    "linebreak-style": 0,
    "prettier/prettier": "error",
    "vue/html-self-closing": 0,
    "vue/singleline-html-element-content-newline": 0,
  },
};
