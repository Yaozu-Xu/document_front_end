describe('DocumentContainer Test', () => {
  it('click h2 scrolls successfully', () => {
    cy
      .visit('localhost:3000/v1/guide')
      .get('#t4')
      .find('a')
      .click()
      .scrollIntoView()
  })
})
