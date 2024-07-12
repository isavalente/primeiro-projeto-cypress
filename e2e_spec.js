describe('E2E Test for E-commerce Site', () => {
    it('should navigate through the e-commerce site and make a purchase', () => {
      // Visite a página inicial
      cy.visit('/');
  
      // Login
      cy.get('#login').click();
      cy.get('#username').type('user@example.com');
      cy.get('#password').type('password');
      cy.get('#loginSubmit').click();
  
      // Pesquisa por um produto
      cy.get('input[name="q"]').type('Test Product');
      cy.get('input[name="q"]').type('{enter}');
  
      // Adiciona ao carrinho
      cy.get('#product_1').click();
      cy.get('#addToCart').click();
  
      // Checkout
      cy.get('#cart').click();
      cy.get('#checkout').click();
  
      // Finaliza a compra
      cy.get('#placeOrder').click();
  
      // Verifica a confirmação da compra
      cy.get('#confirmationMessage').should('contain', 'Thank you for your purchase!');
    });
  });
  