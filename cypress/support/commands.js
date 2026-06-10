Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.get('input[data-qa="login-email"]').clear().type(email);
  cy.get('input[data-qa="login-password"]').clear().type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add("searchProduct", (productName) => {
  cy.get("#search_product").clear().type(productName);
  cy.get("#submit_search").click();
});

Cypress.Commands.add("addProductToCart", (productName) => {
  cy.contains(".features_items .productinfo p", productName)
    .parents(".product-image-wrapper")
    .find("a.add-to-cart")
    .first()
    .click({ force: true });
});
