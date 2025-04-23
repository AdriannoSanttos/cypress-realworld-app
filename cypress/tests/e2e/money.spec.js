describe('Enviar Dinheiro - Com saldo suficiente', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); 
      cy.get('#username').type("Dina20");
      cy.get('#password').type('s3cret');
      cy.get('[data-test="signin-submit"]').click();
      cy.get("[height='28px']").should('be.visible')
      cy.get('[data-test="sidenav-user-balance"]').should('be.visible');
      cy.get('.MuiButton-root').click()

    });
  
    it('Deve permitir envio de dinheiro com saldo suficiente', () => {
      cy.get('.css-1p823my-MuiListItem-root').eq(0).click();
      cy.get('#amount').type('$10');
      cy.get('#transaction-create-description-input').type('Pagamento')
      cy.get("[type='submit']").eq(1).click();
      cy.get('.MuiAlert-message').contains('Transaction Submitted!')
  
      
      
    });

    describe('Enviar dinheiro com saldo insuficiente', () => {
      it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        cy.get('.css-1p823my-MuiListItem-root').eq(0).click();
      cy.get('#amount').type('$3,000.00');
      cy.get('#transaction-create-description-input').type('Pagamento')
      cy.get("[type='submit']").eq(1).click();
      });
    });
  });
  