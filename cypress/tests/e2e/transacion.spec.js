describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      cy.visit('http://localhost:3000')
      cy.get('#username').type("Dina20")
      cy.get('#password').type('s3cret')
      cy.get('[data-test="signin-submit"]').click()
      cy.get("[height='28px']").should('be.visible')
      cy.get('.MuiTab-root').eq(1).click()
      cy.get('.css-114x5zz-MuiGrid-root').eq(0).click()
      cy.get('.css-mpyo7s-MuiTypography-root').contains('Transaction Detail')
    });

    describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
        it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
          cy.visit('http://localhost:3000/signup')
          cy.get('#firstName').type('João')
          cy.get('#lastName').type('Silva')
          cy.get('#username').type('JoaoSilva')
          cy.get('#password').type('s3cret')
          cy.get('#confirmPassword').type('s3cret')
          cy.get('[data-test="signup-submit"]').click()
          cy.get('#username').type('JoaoSilva')
          cy.get('#password').type('s3cret')
          cy.get('[data-test="signin-submit"]').click()
          cy.get('.MuiTab-root').eq(1).click()
          cy.get("[data-test='empty-list-header']").contains('No Transactions')
         
          
        
          
          
          


        });
      });
  });