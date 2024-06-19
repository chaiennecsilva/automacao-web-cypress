/// <reference types="cypress" />
const element = require("../fixtures/login.json")
beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.contains("Login")
});

afterEach(() => {
    cy.screenshot();
});

describe('Login', () => {
    it('acessar tela de login com sucesso', () => {
        const email = Cypress.env('EMAIL'), 
        password = Cypress.env('PASSWORD')
        cy.Login(email, password)
  
    })

    it('email for valido e senha invalida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL'))
        cy.get(element.input_password).type(Cypress.env('PASSWORD_INVALIDO'))
        cy.get(element.btn_login).click()
        cy.MgsLoginFalho()

    })

    
    it('email for invalido e senha valida', () => {
        cy.get(element.input_email).type(Cypress.env('EMAIL_INVALIDO'))
        cy.get(element.input_password).type(Cypress.env('PASSWORD'))
        cy.get(element.btn_login).click()
        cy.MgsLoginFalho()
    })
});