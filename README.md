# Teste Escriba

**Descrição:** O testes tem como objetivo validar os conhecimentos em Vue.js, JavaScript, Html, Css.

**Pessoa avaliada:** [Maria Baeta](https://github.com/mariabaeta27)

**Stacks**: VUE 3, Axios, VUEX 4, Playwright, TypeScript,

**Desafio**: Implementar o front-end consumindo uma API Restful, com as funcionalidades abaixo:

- Cadastro de pessoa
  
  - [x] Listar;
  - [x] Filtrar 
  - [x] Adicionar;
  - [x] Editar;
  - [x] Excluir;

- **Realizar validação dos dados abaixo no front:**
  - [x] Nome obrigatório;
  - [x] CPF válido;
  - [x] Caso o servidor retorne erro, apresentá-lo amigavelmente ao usuário.

- **Bônus**:
  - **Cadastro de pedido e seus itens**:
    - [ ] Listar;
    - [ ] Filtrar;
    - [ ] Adicionar
    - [ ] Editar
    - [ ] Excluir

  - [ ] Adaptação mobile (layout responsivo)
  - [x] Legibilidade;
  - [x] Boa documentação;
  - [x] Testes automatizados;
  - [x] Utilização da biblioteca Vuex.

## Setup dp projeto

- Baixar o arquivo do projeto e descompactar o arquivo .zip
- Acesse a pasta do projeto
```sh
cd test-vue-escriba
```
- Instale as depedencias com o comando: (Recomendo a utilização do Yarn como gerenciador de pacotes, mas pode usar o de sua preferência)


```sh
yarn
```

- Para rodar o service, instate o json-server:

```sh
npm install -g json-server
```

## Rodar o server

```sh
json-server --watch ./data.json
```

Isso ira disponibilizar uma API Rest rodando nas sequinte rotas: 

```sh
 http://localhost:3000/pessoas
 http://localhost:3000/produtos
 http://localhost:3000/pedidos
```


## Rodando o projeto

Com o comando a seguir execute o projeto e no seu navegador acesse:


```sh
  yarn dev

http://localhost:5173/

```

## Lint com [ESLint](https://eslint.org/)
Com o comando a seguir  execute o Lint:

```sh
yarn run lint
```

## Testes de integração com [Playwright](https://playwright.dev/)
Com o comando a seguir execute os testes de integração:

```sh
 npx playwright test --ui
```

Após ira abrir um navegador de simulação, clique no icone de play para iniciar a execução dos testes::

![Play]('/src/assets/play.png')
