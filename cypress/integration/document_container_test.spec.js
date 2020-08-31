describe("DocumentContainer Test", () => {
  it("click h2 scrolls successfully", () => {
    cy.visit("http://localhost:3000").get("#title-4").find("a").click();
  });
});
