class MoneyPage {
    
    get usernameField() {
      return cy.get('#username');
    }
  
    get passwordField() {
      return cy.get('#password');
    }
  
    get loginButton() {
      return cy.get('[data-test="signin-submit"]');
    }
  
    get saldoLabel() {
      return cy.get('[data-test="sidenav-user-balance"]');
    }
  
    get enviarDinheiroButton() {
      return cy.get('.MuiButton-root');
    }
  
    get listaTransacoes() {
      return cy.get('.css-1p823my-MuiListItem-root');
    }
  
    get amountField() {
      return cy.get('#amount');
    }
  
    get descriptionField() {
      return cy.get('#transaction-create-description-input');
    }
  
    get submitButton() {
      return cy.get("[type='submit']").eq(1);
    }
  
    get successMessage() {
      return cy.get('.MuiAlert-message');
    }
  
    
    login(username, password) {
      this.usernameField.type(username);
      this.passwordField.type(password);
      this.loginButton.click();
    }
  
    enviarDinheiro(amount, description) {
      this.listaTransacoes.eq(0).click();
      this.amountField.type(amount);
      this.descriptionField.type(description);
      this.submitButton.click();
    }
  }
  
  export default new MoneyPage();
  