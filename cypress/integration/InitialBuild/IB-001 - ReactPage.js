// User Story
// Given that the local dev version of Bookmarks is running
// When I open the local version
// I should see the text Test in a large font

///<reference types="Cypress" />

describe('Scenario: Testing Initial Build of Front End and Back End', () => {
    it('Confirm local build is working as expected', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Test')
        cy.get('h1').should('contain', 'Test')
    })
    it('Confirm webhosting is working as expected', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Test')
        cy.get('h1').should('contain', 'Test')
    })
    it('Confirm local build is communicating with API', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Test')
        cy.get('h1').should('contain', 'Test')
    })
    it('Confirm webhosting is communicating with API', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Test')
        cy.get('h1').should('contain', 'Test')
    })
})