import OrderPlacedPage from "./OrderPalcedPage";
import PaymentDonePage from "./PaymentDonePage";

class PaymentPage {
  getNameOnCard = () => cy.get("[data-qa='name-on-card']");
  getCardNumber = () => cy.get(".form-control.card-number");
  getCvc = () => cy.get(".form-control.card-cvc");
  getExpirationMonth = () => cy.get(".form-control.card-expiry-month");
  getExpirationYear = () => cy.get(".form-control.card-expiry-year");
  getPayAndConfirmOrderButton = () => cy.get("#submit");

  getSuccessMessageText() {
    return cy.get("div#success_message.col-md-12.form-group", {
      timeout: 7000,
    });
  }

  fillNameOnCardField(nameOnCard) {
    this.getNameOnCard().type(nameOnCard);
    return this;
  }

  fillCardNumberField(cardNumber) {
    this.getCardNumber().type(cardNumber);
    return this;
  }

  fillCVCField(cvc) {
    this.getCvc().type(cvc);
    return this;
  }

  fillExpirationMonthField(expirationMonth) {
    this.getExpirationMonth().type(expirationMonth);
    return this;
  }
  fillExpirationYearField(expirationYear) {
    this.getExpirationYear().type(expirationYear);
    return this;
  }

  clickPayAndConfirmOrderButton() {
    this.getPayAndConfirmOrderButton().click();
    return new OrderPlacedPage();
  }

  clickPayAndConfirmOrderButton() {
    this.getPayAndConfirmOrderButton().click();
    return new PaymentDonePage();
  }
}
export default PaymentPage;
