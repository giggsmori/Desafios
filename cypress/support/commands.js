Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login", { timeout: 120000 });
  cy.get('input[data-qa="login-email"]').should("be.visible").clear().type(email);
  cy.get('input[data-qa="login-password"]').clear().type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add("assertLoggedIn", () => {
  cy.contains("Logged in as", { timeout: 20000 }).should("be.visible");
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

Cypress.Commands.add("clearCart", () => {
  cy.visit("/view_cart");

  const removeNextItem = () => {
    cy.get("body").then(($body) => {
      const items = $body.find(".cart_quantity_delete");

      if (items.length) {
        cy.get(".cart_quantity_delete").first().click({ force: true });
        cy.get(".cart_quantity_delete").should("have.length.lessThan", items.length);
        removeNextItem();
      }
    });
  };

  removeNextItem();

  cy.get("body").should(($body) => {
    expect($body.find("#cart_info_table td.cart_description h4 a").length).to.eq(0);
  });
});

Cypress.Commands.add("goToCart", () => {
  cy.get("body").then(($body) => {
    const modalVisible =
      $body.find("#cartModal.in").length || $body.find("#cartModal.show").length;

    if (modalVisible) {
      cy.get("#cartModal").find('a[href="/view_cart"]').click();
    } else {
      cy.get(".navbar-nav a[href='/view_cart']").first().click();
    }
  });

  cy.url().should("include", "/view_cart");
});

Cypress.Commands.add("proceedToCheckout", () => {
  cy.get("#cart_info_table td.cart_description h4 a").should("have.length.at.least", 1);
  cy.contains("a.check_out", "Proceed To Checkout").click();
  cy.url().should("include", "/checkout");
  cy.contains("Review Your Order").should("be.visible");
});

Cypress.Commands.add("completePayment", () => {
  cy.contains("Place Order").should("be.visible").click();
  cy.url().should("include", "/payment");
  cy.get('input[name="name_on_card"]').type("Usuario Teste");
  cy.get('input[name="card_number"]').type("4111111111111111");
  cy.get('input[name="cvc"]').type("123");
  cy.get('input[name="expiry_month"]').type("12");
  cy.get('input[name="expiry_year"]').type("2030");
  cy.get('button[data-qa="pay-button"]').click();
});
