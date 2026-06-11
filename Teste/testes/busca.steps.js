import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("realizo uma busca por {string}", (productName) => {
  cy.searchProduct(productName);
});

Then("devo ver produtos relacionados à busca {string}", (productName) => {
  cy.contains("h2", "Searched Products").should("be.visible");
  cy.get(".features_items .productinfo p")
    .should("have.length.at.least", 1)
    .each(($el) => {
      expect($el.text().toLowerCase()).to.include(productName.toLowerCase());
    });
});

Then("não devo ver produtos na listagem", () => {
  cy.contains("h2", "Searched Products").should("be.visible");
  cy.get(".features_items .productinfo p").should("not.exist");
});
