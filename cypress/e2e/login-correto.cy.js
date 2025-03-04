describe('Página de Login', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click()
       

    });

    it('Deve acessar a página de login e preencher os campos corretamente', () => {
        cy.login('brenda123@hotmail.com', 'B123456@bf')
        cy.get('[data-test="submit-button"]').click()     
    })
   
  })
  
  