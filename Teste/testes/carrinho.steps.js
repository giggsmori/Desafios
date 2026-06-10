import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("adiciono o produto {string} ao carrinho", (productName) => {
  cy.addProductToCart(productName);
  cy.get(".modal-content").should("be.visible");
  cy.contains("Your product has been added to cart.").should("be.visible");
});

Then("o produto deve ser adicionado ao carrinho com sucesso", () => {
  cy.contains("View Cart").click();
  cy.url().should("include", "/view_cart");
  cy.get("#cart_info_table td.cart_description h4 a")
    .should("have.length.at.least", 1);
});

When("acesso o carrinho vazio", () => {
  cy.clearCookies();
  cy.visit("/view_cart");
  cy.url().should("include", "/view_cart");
});

Then("o carrinho não deve conter produtos", () => {
  cy.get("#cart_info_table td.cart_description h4 a").should("not.exist");
});
