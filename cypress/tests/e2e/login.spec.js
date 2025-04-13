describe('Login com sucesso', () => {
  
  const selectorsList = {
    usernameFild: '#username',
    passwordFild: '#password',
    confirmpasswordFild: '#confirmPassword',
    loginButton: '[data-test="signin-submit"]',
    firstnameFild: '#firstName',
    lastnameFild: '#lastName', 
  }
  
  
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorsList.usernameFild).type("Heath93")
    cy.get(selectorsList.passwordFild).type('s3cret') 
    cy.get(selectorsList.loginButton).click()
    
  });
  
     
  it('Tentarfazer login com um usuário com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorsList.usernameFild).type('Heath93')
    cy.get(selectorsList.passwordFild).type('s3crete')
    cy.get(selectorsList.loginButton).click()
    cy.get('.MuiAlert-message')
    
    
  });

  describe('Teste de Login - Campos Vazios', () => {
    it('Não deve permitir login com campos vazios', () => {
      cy.visit('http://localhost:3000/signin')
      cy.get(selectorsList.loginButton).click()
      cy.contains('Username is required').should('be.visible')
    });
  });

    describe('Registro de novo usuário com sucesso', () => {
      it('Deve registrar um novo usuário com informações válidas', () => {
        cy.visit('http://localhost:3000/signup')
        cy.get(selectorsList.firstnameFild).type('João')
        cy.get(selectorsList.lastnameFild).type('Silva')
        cy.get(selectorsList.passwordFild).type('s3cret')
        cy.get(selectorsList.confirmpasswordFild).type('s3cret')
        
      });
    });

    describe('Tentar registrar um novo usuário com informações incompletas', () => {
      it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        cy.visit('http://localhost:3000/signup')
        cy.get(selectorsList.firstnameFild).type('João')
        cy.get(selectorsList.lastnameFild).type('Silva')
        cy.get(selectorsList.passwordFild).type('s3cret')
        cy.get(selectorsList.confirmpasswordFild).type('test')
        cy.get('#confirmPassword-helper-text').contains('Password does not match')

      });
    });

    

    
  });