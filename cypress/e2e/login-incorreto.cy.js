describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click()
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
            statusCode:400, }).as('stubPost')

    });
 
    
    it('Deve realizar o login incorretamente', () => {
        cy.loginIncorreto('emailerrado@hotmail.com', 'Errada123')
    });

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('brenda123@hotmail.com', 'B123456@bf')
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')

    });
});
