describe('Testes de Login e Registro com Fixture', () => {
  const selectorsList = {
    usernameFild: '#username',
    passwordFild: '#password',
    confirmpasswordFild: '#confirmPassword',
    loginButton: '[data-test="signin-submit"]',
    firstnameFild: '#firstName',
    lastnameFild: '#lastName',
  };

  let userData;

  
before(() => {
    cy.fixture('user-data').then((data) => {
      userData = data;
    });
  });

  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get(selectorsList.usernameFild).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordFild).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.get("[height='28px']").should('be.visible');
  });

  it('Tentar fazer login com um usuário com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin');
    cy.get(selectorsList.usernameFild).type(userData.userFail.username);
    cy.get(selectorsList.passwordFild).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get('.MuiAlert-message').should('be.visible'); 
  });

  describe('Teste de Login - Campos Vazios', () => {
    it('Não deve permitir login com campos vazios', () => {
      cy.visit('http://localhost:3000/signin');
      cy.get(selectorsList.loginButton).click();
      cy.contains('Username is required').should('be.visible');
    });
  });

  describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      cy.visit('http://localhost:3000/signup');
      cy.get(selectorsList.firstnameFild).type(userData.registSucess.registFirstName);
      cy.get(selectorsList.lastnameFild).type(userData.registSucess.registLastName);
      cy.get(selectorsList.usernameFild).type(userData.userSuccess.username); 
      cy.get(selectorsList.passwordFild).type(userData.registSucess.registPassword);
      cy.get(selectorsList.confirmpasswordFild).type(userData.registSucess.registPasswordConfirm);
      
    });
  });

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      cy.visit('http://localhost:3000/signup');
      cy.get(selectorsList.firstnameFild).type(userData.registFail.registFirstName);
      cy.get(selectorsList.lastnameFild).type(userData.registFail.registLastName);
      cy.get(selectorsList.passwordFild).type(userData.registFail.registPassword);
      cy.get(selectorsList.confirmpasswordFild).type(userData.registFail.registPasswordConfirm);
      cy.get('#confirmPassword-helper-text').contains('Password does not match');
    });
  });
});
