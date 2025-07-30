import Header from "./Header";

class RegisterUserPage {
  getLoginLink = () => cy.get("a[href='/login']");
  getLoginToYourAccountForm = () => cy.get("div.login-form");
  getNameField = () => cy.get("input[data-qa='signup-name']");
  getEmailAddressField = () => cy.get("input[data-qa='signup-email']");
  getSignupButton = () => cy.get("button[data-qa='signup-button']");
  getLoginEmailField = () => cy.get("input[data-qa='login-email']");
  getLoginPasswordField = () => cy.get("input[data-qa='login-password']");
  getLoginButton = () => cy.get("button[data-qa='login-button']");
  getErrorEmaiAddressExists = () => cy.contains("Email Address already exist!");

  clickLoginLink() {
    this.getLoginLink().click();
    return this;
  }

  getLoginToYourAccountForm() {
    return cy.get("div.login-form");
  }

  fillLoginEmailField(emailAddress) {
    this.getLoginEmailField().type(emailAddress);
    return this;
  }

  fillLoginPasswordField(password) {
    this.getLoginPasswordField().type(password);
    return this;
  }

  clickLoginButton() {
    this.getLoginButton().click();
    return new Header();
  }

  fillNameField(name) {
    this.getNameField().type(name);
    return this;
  }

  fillEmailAddressField(emailAddress) {
    this.getEmailAddressField().type(emailAddress);
    return this;
  }

  clickSignupButton() {
    this.getSignupButton().click();
    return this;
  }

  getErrorEmaiAddressExists() {
    return cy.contains("Email Address already exist!");
  }
}
export default RegisterUserPage;
