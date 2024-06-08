/// <reference types="cypress"/>

describe('Login de Acesso', () => {
  it('acessar tela de login', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.contains("Login")
  })
})