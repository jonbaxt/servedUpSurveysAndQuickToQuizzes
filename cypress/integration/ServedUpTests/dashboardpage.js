//Starting Cypress Command: npm run cypress:open

describe('Dashboard Page Features', function(){
    beforeEach(function(){
        cy.visit('/Dashboard')
        // cy.visit('http://localhost:3000')
    })
    
    it('The window did open', function(){
        cy.window(true)
        // .should('have.property', 'top')
    })

    
    // it('Check for button', function(){
    //     cy.get('span').should()
    //     // .should('contain', 'span')
    // })

    // it('Should open input selection', function(){
    //     it('select.selectContainer').click();
    // })

    // it('Should type into input box', function(){
    //     cy.get('input').type('takeoutthetrash')
    // })

})