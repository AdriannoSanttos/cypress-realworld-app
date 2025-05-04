import MoneyPage from './pages/MoneyPage';  



describe('Enviar Dinheiro - Com saldo suficiente', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    MoneyPage.login('Dina20', 's3cret'); 
    cy.get("[height='28px']").should('be.visible');
    MoneyPage.saldoLabel.should('be.visible');
    MoneyPage.enviarDinheiroButton.click();
  });

  it('Deve permitir envio de dinheiro com saldo suficiente', () => {
    MoneyPage.enviarDinheiro('$10', 'Pagamento');
    MoneyPage.successMessage.contains('Transaction Submitted!');
  });

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
      MoneyPage.enviarDinheiro('$3,000.00', 'Pagamento');
    });
  });
});
