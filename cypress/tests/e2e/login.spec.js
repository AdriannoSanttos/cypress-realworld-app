import AuthPage from './pages/AuthPage';

describe('Testes de Login e Registro com Fixture', () => {
  let userData;

  before(() => {
    cy.fixture('user-data').then((data) => {
      userData = data;
    });
  });

  it('Deve fazer login com um usuário válido', () => {
    AuthPage.visitLogin();
    AuthPage.fillUsername(userData.userSuccess.username);
    AuthPage.fillPassword(userData.userSuccess.password);
    AuthPage.submitLogin();
    AuthPage.checkSuccessLoginIcon();
  });

  it('Tentar fazer login com credenciais inválidas', () => {
    AuthPage.visitLogin();
    AuthPage.fillUsername(userData.userFail.username);
    AuthPage.fillPassword(userData.userFail.password);
    AuthPage.submitLogin();
    AuthPage.checkErrorMessage();
  });

  it('Não deve permitir login com campos vazios', () => {
    AuthPage.visitLogin();
    AuthPage.submitLogin();
    AuthPage.checkRequiredUsernameMessage();
  });

  it('Deve registrar um novo usuário com informações válidas', () => {
    AuthPage.visitSignup();
    AuthPage.fillFirstName(userData.registSucess.registFirstName);
    AuthPage.fillLastName(userData.registSucess.registLastName);
    AuthPage.fillUsername(userData.userSuccess.username);
    AuthPage.fillPassword(userData.registSucess.registPassword);
    AuthPage.fillConfirmPassword(userData.registSucess.registPasswordConfirm);
  });

  it('Deve exibir erro ao registrar com informações incompletas', () => {
    AuthPage.visitSignup();
    AuthPage.fillFirstName(userData.registFail.registFirstName);
    AuthPage.fillLastName(userData.registFail.registLastName);
    AuthPage.fillPassword(userData.registFail.registPassword);
    AuthPage.fillConfirmPassword(userData.registFail.registPasswordConfirm);
    AuthPage.checkPasswordMismatchMessage();
  });
});
