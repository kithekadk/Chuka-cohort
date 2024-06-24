describe('Home Component', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it('visits the home page', ()=>{
        cy.get('.login')
        cy.contains('Get Started')
    })

    it('takes me to login page', ()=>{
        cy.get('.login').click()
        cy.location('pathname').should('equal', '/login')
    })

    it('takes me to register page', ()=>{
        cy.get('.register').click()

        cy.location('pathname').should('eq', '/register')
    })

})