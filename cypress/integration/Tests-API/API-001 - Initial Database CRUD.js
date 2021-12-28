// Initial testing for database, right now only read and write from database are operational
// This test will become obsolete as authentication is implemented
// These are all executed on local database, and will be updated as we move into a more
// production environment

///<reference types="Cypress" />

describe ('Testing initial database, local database only at this time.', () => {
    it ('Testing opening local API server', () => {
        cy
            .request(
                'GET',
                'http://localhost:3001/test/test'
            )
            .as('CRUDTest')
        cy
            .get('@CRUDTest')
            .should('have.property', 'status', 200)
                
    })
})