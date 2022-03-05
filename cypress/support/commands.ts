declare namespace Cypress{
    interface Chainable{
        /**
         * Navigate to home page
         */
        visitHomepage(): Chainable<Element>
        /**
         * Nvaigate to login page
         */
        visitLoginpage(): Chainable<Element>
        /**
         * Navigate to feedback page
         */
        visitFeedbackpage(): Chainable<Element>
    }
}

Cypress.Commands.add('visitHomepage', ()=>{
    cy.visit('http://zero.webappsecurity.com/index.html')
})

Cypress.Commands.add('visitLoginpage',()=>{
    cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedbackpage', ()=>{
    cy.visit('http://zero.webappsecurity.com/feedback.html')
})