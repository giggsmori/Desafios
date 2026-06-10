import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const TRELLO_API_VALID =
  "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a";
const TRELLO_API_INVALID =
  "https://api.trello.com/1/actions/000000000000000000000000";

When("envio um GET para a API do Trello com action válida", () => {
  cy.request({
    method: "GET",
    url: TRELLO_API_VALID,
    failOnStatusCode: false,
  }).as("trelloResponse");
});

When("envio um GET para a API do Trello com action inválida", () => {
  cy.request({
    method: "GET",
    url: TRELLO_API_INVALID,
    failOnStatusCode: false,
  }).as("trelloResponse");
});

Then("o status code da resposta deve ser {int}", (statusCode) => {
  cy.get("@trelloResponse").its("status").should("eq", statusCode);
});

Then('o campo name da estrutura list deve ser {string}', (expectedName) => {
  cy.get("@trelloResponse").then((response) => {
    const listName = response.body.data.list.name;
    cy.log(`Nome da lista: ${listName}`);
    expect(listName).to.eq(expectedName);
  });
});
