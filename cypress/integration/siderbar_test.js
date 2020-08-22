describe('siderbar test', () => {
  it('test the number of language', () => {
    cy.visit('http://localhost:3000')
    cy.get('.ml-auto li')
      .should('contain', '简体中文')
  })
})
