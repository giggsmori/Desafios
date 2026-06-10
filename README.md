# Desafio HCX - Automação Web e API

Projeto de automação de testes utilizando **Cypress**, **Cucumber (BDD)** e **JavaScript**, cobrindo cenários web no site [Automation Exercise](https://www.automationexercise.com) e testes de API no Trello.

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [Cypress](https://www.cypress.io/) | Framework de automação |
| [Cucumber](https://cucumber.io/) | Escrita de cenários em BDD (Gherkin) |
| JavaScript | Linguagem de programação |

> **Nota:** O site `automationpractice.com` frequentemente fica indisponível. Os testes web foram implementados no site equivalente [automationexercise.com](https://www.automationexercise.com), conforme indicado no desafio.

## Estrutura do Projeto

```
Desafio-HCX/
├── Teste/
│   ├── cenarios/            # Cenários BDD (Gherkin)
│   │   ├── login/           # Feature Login
│   │   ├── busca/           # Feature Busca
│   │   ├── carrinho/        # Feature Adicionar ao carrinho
│   │   ├── checkout/        # Validar produto no carrinho (finalizar compra)
│   │   └── api/             # Desafio API Trello
│   └── testes/              # Implementação dos testes (step definitions)
├── cypress/
│   └── support/             # Comandos customizados Cypress
├── cypress.config.js
├── package.json
└── README.md
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [npm](https://www.npmjs.com/) (incluso com o Node.js)
- Google Chrome instalado

## Instalação do Ambiente

1. Clone ou acesse o diretório do projeto:

```bash
cd Desafio-HCX
```

2. Instale as dependências:

```bash
npm install
```

## Executando os Testes

### Executar todos os testes (modo headless)

```bash
npm test
```

### Abrir o Cypress em modo interativo

```bash
npm run cy:open
```

### Executar features individualmente

```bash
npm run test:login      # Feature Login
npm run test:busca      # Feature Busca
npm run test:carrinho   # Feature Adicionar ao carrinho
npm run test:checkout   # Validar produto no carrinho
npm run test:api        # Desafio API Trello
```

## Cenários Implementados

Cada desafio possui ao menos **um cenário positivo** e **um cenário negativo**.

### Web - Automation Exercise

| Feature | Positivo | Negativo |
|---|---|---|
| **Login** | Login válido (`teste2021` / `teste2024`) | Credenciais incorretas |
| **Busca** | Buscar produto existente (`Blue Top`) | Buscar produto inexistente |
| **Adicionar ao carrinho** | Adicionar produto com sucesso | Carrinho vazio sem produtos |
| **Validar produto no carrinho** | Produto adicionado listado no checkout | Produto não adicionado ausente no checkout |

### API - Trello

| Cenário | Tipo | Validação |
|---|---|---|
| Action válida | Positivo | Status `200` e `data.list.name` = `Professional` |
| Action inválida | Negativo | Status `404` |

## Credenciais de Teste

| Email | Senha |
|---|---|
| `teste2021@teste.com.br` | `teste` |
| `teste2024@teste.com.br` | `teste` |

## Relatórios

Após a execução, screenshots de falhas são salvos em `cypress/screenshots/`.
