describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      cy.visit('http://localhost:3000/signin')
      cy.get('#username').type("Heath93")
      cy.get('#password').type('s3cret')
      cy.get('[data-test="signin-submit"]').click()
      cy.location('pathname').should('equal','/__/#/specs/runner?file=cypress/tests/e2e/login.spec.js')
     
      
    });
  });