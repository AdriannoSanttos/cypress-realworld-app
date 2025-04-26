import userData from '../data/user-data.json'

describe('Login com sucesso', () => {
  
  const selectorsList = {
    usernameFild: '#username',
    passwordFild: '#password',
    confirmpasswordFild: '#confirmPassword',
    loginButton: '[data-test="signin-submit"]',
    firstnameFild: '#firstName',
    lastnameFild: '#lastName', 
  }

  const userDate = {
    
    userSuccess: {
      username: 'Heath93',
      password: 's3cret'
  
    },
  
    userFail: {
      username: 'Heath93', 
      password: 's3crete'
  
    }
  }


  const userRegist = {
    registSucess: {
      registFirstName: 'João',
      registLastName: 'Silva',
      registPassword: 's3cret',
      registPasswordConfirm: 's3cret'
    }, 

    registFail: {
      registFirstName: 'João',
      registLastName: 'Silva',
      registPassword: 's3cret',
      registPasswordConfirm: 'Test'


    }

  }
  
  
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorsList.usernameFild).type(userDate.userSuccess.username)
    cy.get(selectorsList.passwordFild).type(userDate.userSuccess.password) 
    cy.get(selectorsList.loginButton).click()
    cy.get("[height='28px']").should('be.visible')

    
    
  });
  
     
  it('Tentarfazer login com um usuário com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/signin')
    cy.get(selectorsList.usernameFild).type(userDate.userFail.username)
    cy.get(selectorsList.passwordFild).type(userDate.userFail.password)
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
        cy.get(selectorsList.firstnameFild).type(userRegist.registSucess.registFirstName)
        cy.get(selectorsList.lastnameFild).type(userRegist.registSucess.registLastName)
        cy.get(selectorsList.passwordFild).type(userRegist.registSucess.registPassword)
        cy.get(selectorsList.confirmpasswordFild).type(userRegist.registSucess.registPasswordConfirm)
        
      });
    });

    describe('Tentar registrar um novo usuário com informações incompletas', () => {
      it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        cy.visit('http://localhost:3000/signup')
        cy.get(selectorsList.firstnameFild).type(userRegist.registFail.registFirstName)
        cy.get(selectorsList.lastnameFild).type(userRegist.registFail.registLastName)
        cy.get(selectorsList.passwordFild).type(userRegist.registFail.registPassword)
        cy.get(selectorsList.confirmpasswordFild).type(userRegist.registFail.registPasswordConfirm)
        cy.get('#confirmPassword-helper-text').contains('Password does not match')

      });
    });

    

    
  });