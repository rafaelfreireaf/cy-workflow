describe('App', () => {
  it('should render the home page', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Nuxt!')
    cy.contains('h2', 'Testing with Cypress')
  })
})