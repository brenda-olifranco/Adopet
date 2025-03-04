describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });

    it('Deve preencher os campos do formulário incorretamente', () => {
      cy.contains('a', 'Cadastrar').click()
      cy.get('[data-test="submit-button"]').click()
      cy.contains('É necessário informar um endereço de email').should('exist')
      cy.contains('Crie uma senha').should('exist')
      cy.contains('Repita a senha criada acima').should('exist')
    })
  })
  
  