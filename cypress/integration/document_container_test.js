describe('DocumentContainer Test', () => {
  it('click h2 scrolls successfully', () => {
    cy
      .visit('http://localhost:3000/guide')
      .get('#t4')
      .find('a')
      .click()
      .scrollIntoView()
  })
})
