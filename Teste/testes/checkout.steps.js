import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que limpo o carrinho", () => {
  cy.visit("/view_cart");
  cy.get("body").then(($body) => {
    if ($body.find(".cart_quantity_delete").length) {
      cy.get(".cart_quantity_delete").each(($btn) => {
        cy.wrap($btn).click();
      });
    }
  });
});

When("acesso o carrinho e prossigo para o checkout", () => {
  cy.contains("View Cart").click();
  cy.url().should("include", "/view_cart");
  cy.get("#cart_info_table td.cart_description h4 a")
    .should("have.length.at.least", 1);
  cy.visit("/checkout");
});

Then("o produto {string} deve estar listado na tela de pagamento", (productName) => {
  cy.url().should("include", "/checkout");
  cy.contains("Review Your Order").should("be.visible");
  cy.get(".cart_description h4 a").should("contain.text", productName);
});

Then("o produto {string} não deve estar listado na tela de pagamento", (productName) => {
  cy.url().should("include", "/checkout");
  cy.contains("Review Your Order").should("be.visible");
  cy.contains(".cart_description h4 a", productName).should("not.exist");
});
