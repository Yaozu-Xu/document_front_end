it('adds and completes todos', () => {
  cy.visit('http://localhost:3000/')
  cy.title().should('contain', 'muti_language')
})
