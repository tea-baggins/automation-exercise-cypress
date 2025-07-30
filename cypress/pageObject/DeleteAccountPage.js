import Header from "./Header";
import HomePage from "./HomePage";

class DeleteAccountPage extends Header {
  getDeleteAccountLink = () => cy.get("a[href='/delete_account']");
  getAccountCreatedText = () => cy.get("h2.title.text-center");
  getContinueButton = () => cy.get('a[data-qa="continue-button"]');

  clickDeleteAccountLink() {
    this.getDeleteAccountLink().click();
    return this;
  }

  getDeletedMessage() {
    return cy.contains("h2.title.text-center", "Account Deleted!");
  }

  clickContinueButton() {
    this.getContinueButton().click();
    return new HomePage();
  }
}
export default DeleteAccountPage;
