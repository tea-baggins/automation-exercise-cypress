import HomePage from "./HomePage";

class PaymentDonePage {
  getDownloadInvoiceButton = () => cy.contains("Download Invoice");
  getOrderPlacedText = () => cy.contains("Order Placed!");
  getSuccessMessage = () =>
    cy.contains("Your order has been placed successfully!");
  getContinueButton = () => cy.get("a[data-qa='continue-button']");
  getInvoiceDownloadLink = () => cy.get("a[href*='/download_invoice/500']");

  clickContinueButton() {
    this.getContinueButton().click();
    return new HomePage();
  }

  clickDownloadInvoiceButton() {
    this.getDownloadInvoiceButton().click();
    return this;
  }

  getDownloadInvoiceButton() {
    return cy.contains("Download Invoice");
  }

  getInvoiceDownloadUrl() {
    return this.getInvoiceDownloadLink().invoke("attr", "href");
  }

  clickContinueButton() {
    this.getContinueButton().click();
    return new HomePage();
  }
}
export default PaymentDonePage;
