import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("prossigo para o checkout", () => {
  cy.proceedToCheckout();
});

Then("o produto {string} deve estar listado na tela de pagamento", (productName) => {
  cy.url().should("include", "/checkout");
  cy.contains("Review Your Order").should("be.visible");
  cy.contains("table", "Description").should("contain.text", productName);
  cy.contains("Place Order").should("be.visible");
});

Then("o produto {string} não deve estar listado na tela de pagamento", (productName) => {
  cy.url().should("include", "/checkout");
  cy.contains("Review Your Order").should("be.visible");
  cy.contains("table", "Description").should("not.contain.text", productName);
});

When("concluo a compra", () => {
  cy.completePayment();
});

Then("a compra deve ser finalizada com sucesso", () => {
  cy.url().should("include", "/payment_done");
  cy.contains("Order Placed!").should("be.visible");
  cy.contains("Congratulations! Your order has been confirmed!").should("be.visible");
});
