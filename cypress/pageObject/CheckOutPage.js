import PaymentPage from "./PaymentPage";

class CheckoutPage {
  getLoginRegisterLink = () => cy.get(".modal-body a[href='/login']");
  getAddressDetails = () => cy.contains("Address Details");
  getYourDeliveryAddress = () => cy.get("#address_delivery");
  getYourBillingAddress = () => cy.get("#address_invoice");
  getReviewYourOrder = () => cy.contains("Review Your Order");
  getAddCommentTextField = () => cy.get("div#ordermsg.form-group");
  getPalceOrderButton = () => cy.get("a[href='/payment']");

  clickLoginRegisterLink() {
    this.getLoginRegisterLink().click();
    return new PaymentPage();
  }

  fillAddCommentTextField(addComment) {
    this.getAddCommentTextField().type(addComment);
  }

  clickPlaceOrderButton() {
    this.getPalceOrderButton().click();
    return new PaymentPage();
  }

  getDeliveryAddress() {
    return cy.get("#address_delivery");
  }

  getBillingAddress() {
    return cy.get(".#address_invoice");
  }

  addressDetails() {
    cy.get("#address_delivery")
      .invoke("text")
      .then((text1) => {
        cy.get("#address_invoice")
          .invoke("text")
          .then((text2) => {
            const clean1 = text1.replace("Your delivery address", "").trim();
            const clean2 = text2.replace("Your billing address", "").trim();
            expect(clean1).to.eq(clean2);
          });
      });
  }
}
export default CheckoutPage;
