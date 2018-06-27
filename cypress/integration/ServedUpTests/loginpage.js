describe('Web Functionality', function(){
    beforeEach(function(){
        cy.visit('/')
        // cy.visit('http://localhost:3000')
    })
    
    it('The window did open', function(){
        cy.screenshot();
        cy.get("nav").should("not.have.class", "bg-white");
        cy.get("#white_burger").should("not.be.visible");
        cy.get("#big_white_logo").should("be.visible");
        // Mobile checks
        cy.viewport("iphone-6");
        cy.get("#white_burger").should("be.visible");
        //         cy.window(true)
//         // .should('have.property', 'top')
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