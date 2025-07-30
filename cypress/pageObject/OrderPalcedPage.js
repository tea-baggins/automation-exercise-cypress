import HomePage from "./HomePage";

class OrderPlacedPage {
  getOrderPlacedText = () => cy.contains("Order Placed!");
  getContinueButton = () => cy.get("a[data-qa='continue-button']");

  clickContinueButton() {
    this.getContinueButton().click();
    return new HomePage();
  }
}
export default OrderPlacedPage;
