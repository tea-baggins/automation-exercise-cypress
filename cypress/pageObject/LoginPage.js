import Header from "./Header";
import SignupPage from "./SignupPage";

class LoginPage {
  getLoginLink = () => cy.get("a[href='/login']");
  getLoginToYourAccountForm = () => cy.get("div.login-form");
  getNameField = () => cy.get("input[data-qa='signup-name']");
  getLoginEmailAddressField = () => cy.get("[data-qa='login-email']");
  getEmailAddressField = () => cy.get("input[data-qa='signup-email']");
  getLoginPasswordField = () => cy.get("input[data-qa='login-password']");
  getLoginButton = () => cy.get("[data-qa='login-button']");
  getSignUpForm = () => cy.get(".signup-form");
  getSignupButton = () => cy.get("[data-qa='signup-button']");
  getErrorEmaiAddressExists = () => cy.contains("Email Address already exist!");

  clickLoginLink() {
    this.getLoginLink().click();
    return this;
  }

  getLoginToYourAccountForm() {
    return cy.get("div.login-form");
  }

  fillNameField(name) {
    this.getNameField().type(name);
    return this;
  }

  fillEmailAddressField(emailAddress) {
    this.getEmailAddressField().type(emailAddress);
    return this;
  }

  fillLoginEmailAddressField(emailAddress) {
    this.getLoginEmailAddressField().type(emailAddress);
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

  getErrorMessage() {
    return cy.contains("Your email or password is incorrect!");
  }

  clickSignupButton() {
    this.getSignupButton().click();
    return new SignupPage();
  }

  getErrorEmaiAddressExists() {
    return cy.contains("Email Address already exist!");
  }
}
export default LoginPage;
