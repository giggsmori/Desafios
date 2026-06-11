import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("adiciono o produto {string} ao carrinho", (productName) => {
  cy.assertLoggedIn();
  cy.addProductToCart(productName);
  cy.get("#cartModal.in, #cartModal.show", { timeout: 10000 }).should("be.visible");
  cy.contains("Your product has been added to cart.").should("be.visible");
});

Then("o produto deve ser adicionado ao carrinho com sucesso", () => {
  cy.contains("Continue Shopping").click();
  cy.goToCart();
  cy.get("#cart_info_table td.cart_description h4 a").should("have.length.at.least", 1);
});

Then("o produto {string} deve estar listado no carrinho", (productName) => {
  cy.get("#cart_info_table td.cart_description h4 a")
    .should("have.length.at.least", 1)
    .and("contain.text", productName);
});

Then("o carrinho não deve conter produtos", () => {
  cy.get("body").should(($body) => {
    expect($body.find("#cart_info_table td.cart_description h4 a").length).to.eq(0);
  });
});
