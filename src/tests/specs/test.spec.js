describe("/", () => {
  it("should be index page", () => {
    cy.visit("/");
    cy.getCypressElement("title").click();
  });
});
