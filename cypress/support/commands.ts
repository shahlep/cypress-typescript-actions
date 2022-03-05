declare namespace Cypress{
    interface chainable{
        visitHomepage(): chainable<Element>
        visitLoginpage(): chainable<Element>
        visitFeedbackpage(): chainable<Element>
    }
}