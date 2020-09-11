/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// We're runing tests, so importing devDependencies is fine
import "@cypress/code-coverage/support";

afterEach(() => {
  cy.window().then((win) => {
    /* eslint-disable-next-line no-underscore-dangle -- __coverage__ is defined by istanbul */
    const coverage = win.__coverage__;
    if (coverage) {
      cy.task("combineCoverage", JSON.stringify(coverage));
    }
  });
});
