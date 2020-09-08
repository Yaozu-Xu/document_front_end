/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// We're runing tests, so importing devDependencies is fine
const codeCoverageTask = require("@cypress/code-coverage/task");

module.exports = (on, config) => {
  codeCoverageTask(on, config);
  return config;
};
