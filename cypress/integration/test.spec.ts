describe('test for all is configured correctly', () => {
  it('setup check', () => {
    //cy.visit('https://docs.cypress.io/api/commands/visit')
    //cy.visitHomepage()
    cy.visitLoginpage()
    cy.login('username','password')
  })
  it('feedback test', () => {
    cy.visitFeedbackpage()
    cy.feedback('test','test@example.com','text subject', 'des---crip---tion')  
  })
})