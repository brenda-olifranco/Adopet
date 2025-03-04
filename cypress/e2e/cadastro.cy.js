import { Faker, faker } from '@faker-js/faker';


describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');

  });

 
  it('Deve preencher os campos do formulário para cadastrar um novo usuário', () => {
    cy.contains('a', 'Cadastrar').click()
    cy.cadastro(faker.person.fullName(), faker.internet.email(), faker.internet.password())
  })
})

