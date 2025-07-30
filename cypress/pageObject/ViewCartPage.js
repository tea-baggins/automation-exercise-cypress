import CheckoutPage from "./CheckOutPage";

class ViewCartPage {
  getCartInfo = () => cy.get("#cart_info");
  getCartPrice = () => cy.get("td.price").first();
  getProductQuantity = () => cy.get("td.cart_quantity");
  getTotalPrice = () => cy.get("td.total");
  getCartPage = () => cy.get("a[href='/view_cart']");
  getCartDeleteButton = () => cy.get("a[data-product-id='1']");
  getCartIsEmptyMessage = () => cy.get("#empty_cart");
  getProceedToCheckoutButton = () => cy.get("a.btn.btn-default.check_out");

  getCartPage() {
    return cy.get("a[href='/view_cart']");
  }

  clickCartDeleteButton() {
    this.getCartDeleteButton().click();
    return this;
  }

  clickViewCartLinkModal() {
    cy.get(".modal-content").within(() => {
      cy.get("a[href='/view_cart']").click();
    });
  }

  clickProceedToCheckoutButton() {
    this.getProceedToCheckoutButton().click();
    return new CheckoutPage();
  }
}
export default ViewCartPage;
