class TransactionHistoryPage {
    
    get usernameField() {
      return cy.get('#username');
    }
  
    get passwordField() {
      return cy.get('#password');
    }
  
    get loginButton() {
      return cy.get('[data-test="signin-submit"]');
    }
  
    get tabTransactions() {
      return cy.get('.MuiTab-root').eq(1);
    }
  
    get transactionDetails() {
      return cy.get('.css-114x5zz-MuiGrid-root').eq(0);
    }
  
    get transactionDetailTitle() {
      return cy.get('.css-mpyo7s-MuiTypography-root');
    }
  
    get emptyTransactionMessage() {
      return cy.get("[data-test='empty-list-header']");
    }
  
    
    login(username, password) {
      this.usernameField.type(username);
      this.passwordField.type(password);
      this.loginButton.click();
    }
  
    navigateToTransactionHistory() {
      this.tabTransactions.click();
    }
  
    checkTransactionDetails() {
      this.transactionDetails.click();
      this.transactionDetailTitle.contains('Transaction Detail');
    }
  
    checkNoTransactionsMessage() {
      this.emptyTransactionMessage.contains('No Transactions');
    }
  }
  
  export default new TransactionHistoryPage();
  