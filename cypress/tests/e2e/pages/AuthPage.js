class AuthPage {
    visitLogin() {
      cy.visit('http://localhost:3000/signin');
    }
  
    visitSignup() {
      cy.visit('http://localhost:3000/signup');
    }
  
    fillUsername(username) {
      cy.get('#username').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    fillConfirmPassword(password) {
      cy.get('#confirmPassword').type(password);
    }
  
    fillFirstName(firstName) {
      cy.get('#firstName').type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get('#lastName').type(lastName);
    }
  
    submitLogin() {
      cy.get('[data-test="signin-submit"]').click();
    }
  
    checkSuccessLoginIcon() {
      cy.get("[height='28px']").should('be.visible');
    }
  
    checkErrorMessage() {
      cy.get('.MuiAlert-message').should('be.visible');
    }
  
    checkRequiredUsernameMessage() {
      cy.contains('Username is required').should('be.visible');
    }
  
    checkPasswordMismatchMessage() {
      cy.get('#confirmPassword-helper-text').contains('Password does not match');
    }
  }
  
  export default new AuthPage();
  