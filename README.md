# 🐾 Adopet E2E Testing

## 📌 Sobre o projeto
Este projeto utiliza **Cypress** para testes End-to-End (E2E), validando tanto a **API** quanto a interface do sistema **Adopet**. O objetivo é garantir a qualidade e confiabilidade da plataforma em diferentes fluxos de usuário.

## 🚀 Tecnologias utilizadas
- [Cypress](https://www.cypress.io/) - Testes E2E (UI + API)
- [Mochawesome](https://www.npmjs.com/package/mochawesome) - Relatórios detalhados de testes

## 🛠 Configuração do ambiente

1. Clone o repositório:
   ```sh
   git clone https://github.com/brenda-olifranco/Adopet.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd Adopet
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## 🏃‍♀️ Executando os testes

### 🔹 Testes E2E no modo interativo
```sh
npx cypress open
```  
### 🔹 Testes E2E no terminal
```sh
npx cypress run
```  
### 🔹 Gerar relatório com **Mochawesome**
```sh
npx cypress run --reporter mochawesome
```

## 📊 Acessando os relatórios

Após rodar os testes com Mochawesome, o relatório será gerado na pasta:
```
/cypress/reports/mochawesome-report.html
```
Para visualizar, basta abrir o arquivo **mochawesome-report.html** no navegador.

## 📢 Contribuição

1. Crie um branch para sua feature ou correção de bug:
   ```sh
   git checkout -b minha-feature
   ```
2. Faça suas alterações e commit:
   ```sh
   git commit -m "feat: descrição da alteração"
   ```
3. Envie para o repositório remoto:
   ```sh
   git push origin minha-feature
   ```
4. Abra um **Pull Request** 🚀



