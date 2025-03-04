# Adopet API Testing

## 📌 Sobre o projeto
Este projeto utiliza **Cypress** para testes de API no sistema **Adopet**. O objetivo é garantir a qualidade e confiabilidade das respostas da API.

## 🚀 Tecnologias utilizadas
- [Cypress](https://www.cypress.io/) - Testes End-to-End
- [Mochawesome](https://www.npmjs.com/package/mochawesome) - Relatórios de testes detalhados

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
Para rodar os testes de API via Cypress, utilize um dos comandos abaixo:

- Executar testes no modo interativo:
  ```sh
  npx cypress open
  ```
- Executar testes no terminal:
  ```sh
  npx cypress run
  ```
- Gerar relatório com **Mochawesome**:
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
4. Abra um Pull Request 🚀


