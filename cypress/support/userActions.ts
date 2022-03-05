declare namespace Cypress{
    interface Chainable{
        /**
         * @param username - takes user name or id
         * @param password - takes user passowrd
         */
        login(username: String, password: String): Chainable<Element>
    }
}

Cypress.Commands.add('login',(username, password)=>{

})