import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de produtos", () => {
  cy.visit("/products");
  cy.get(".features_items").should("be.visible");
});

When("realizo uma busca por {string}", (productName) => {
  cy.searchProduct(productName);
});

Then("devo ver produtos relacionados à busca {string}", (productName) => {
  cy.get(".features_items .productinfo p")
    .should("have.length.at.least", 1)
    .each(($el) => {
      expect($el.text().toLowerCase()).to.include(productName.toLowerCase());
    });
});

Then("não devo ver produtos na listagem", () => {
  cy.get(".features_items .productinfo p").should("not.exist");
});
