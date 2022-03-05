declare namespace Cypress{
    interface Chainable{
        /**
         * @param username - takes user name or id
         * @param password - takes user passowrd
         */
        login(username: String, password: String): Chainable<Element>

        /**
         * 
         * @param name - takes user name
         * @param email - takes user email
         * @param subject - takes the subject of the feedback
         * @param description - takes the description of the feedback
         */
        feedback( name:String, email:String, subject:String, description:String)
    }
}

Cypress.Commands.add('login',(username, password)=>{
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.contains('Sign in').click()
})

Cypress.Commands.add('feedback',(name,email,subject,description)=>{
    cy.get('#name').type('name')
    cy.get('#email').type('email')
    cy.get('#subject').type('subject')
    cy.get('#comment').type('description')
    cy.contains('Send Message').click()
})