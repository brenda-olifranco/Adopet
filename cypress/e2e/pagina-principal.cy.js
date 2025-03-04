describe('Visitando página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
    });

    it('Verificando o title', () => {
        cy.title().should('eq', 'AdoPet')
    });

    it('Verificando html', () => {
        cy.contains('Quem ama adota!').should('exist')
    });

    it('Texto sobre adotar', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('exist')
    });
    
    it('Login pelo ícone de mensagem no header', () => {
        cy.get('.header__message').click()
        cy.contains('Já tem conta? Faça seu login:').should('exist')
    });
});