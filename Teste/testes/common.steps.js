import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou logado com {string} e senha {string}", (email, password) => {
  cy.session(
    [email, password],
    () => {
      cy.login(email, password);
      cy.assertLoggedIn();
    },
    {
      validate() {
        cy.visit("/");
        cy.assertLoggedIn();
      },
    }
  );

  cy.visit("/");
  cy.assertLoggedIn();
});

Given("que estou na página de produtos", () => {
  cy.visit("/products", { timeout: 120000 });
  cy.get(".features_items").should("be.visible");
});

Given("que limpo o carrinho", () => {
  cy.clearCart();
});
