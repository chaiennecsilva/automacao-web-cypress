 /// <reference types="cypress" />

 Cypress.Commands.add('Login', (email, password) => { 
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()


    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login');
    })

    cy.get('body > nav >button').should('be.visible')

 });

 Cypress.Commands.add('MgsLoginFalho', () => { 

    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible')
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E')
    
 });