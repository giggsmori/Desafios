import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("/login", { timeout: 120000 });
  cy.get('input[data-qa="login-email"]').should("be.visible");
});

Given("que não estou autenticado", () => {
  cy.clearCookies();
  cy.visit("/login", { timeout: 120000 });
  cy.get('input[data-qa="login-email"]').should("be.visible");
});

When("informo o email {string} e a senha {string}", (email, password) => {
  cy.get('input[data-qa="login-email"]').clear().type(email);
  cy.get('input[data-qa="login-password"]').clear().type(password);
});

When("clico no botão de login", () => {
  cy.get('button[data-qa="login-button"]').click();
});

Then("devo estar logado com sucesso", () => {
  cy.contains("Logged in as", { timeout: 20000 }).should("be.visible");
});

Then("devo ver mensagem de erro de login", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
  cy.contains("Logged in as").should("not.exist");
});

Given("que estou logado com {string} e senha {string}", (email, password) => {
  cy.login(email, password);
  cy.contains("Logged in as", { timeout: 20000 }).should("be.visible");
});
