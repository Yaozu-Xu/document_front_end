<<<<<<< HEAD
describe('DocumentContainer Test', () => {
  it('click h2 scrolls successfully', () => {
    cy
      .visit('http://localhost:3000/guide')
      .get('#title-4')
      .find('a')
      .click()
      .scrollIntoView()
  })
})
=======
describe("DocumentContainer Test", () => {
  it("click h2 scrolls successfully", () => {
    // eslint-disable-next-line cypress/no-force
    cy.visit("http://localhost:3000")
      .get("#title-4")
      .find("a")
      .click({ force: true })
      .scrollIntoView();
  });
});
>>>>>>> 4436a33... Fix: fix click problem caused by elements converage
