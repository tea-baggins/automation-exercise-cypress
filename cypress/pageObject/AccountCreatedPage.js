import LoggedPage from "./LoggedPage";

class AccountCreatedPage {
  getAccountCreatedText = () => cy.get("h2.title.text-center");
  getContinueButton = () => cy.get("a[data-qa='continue-button']");

  getAccountCreatedText() {
    return cy.contains("h2.title.text-center", "Account Created!");
  }

  clickContinueButton() {
    this.getContinueButton().click();
    return new LoggedPage();
  }
}
export default AccountCreatedPage;
