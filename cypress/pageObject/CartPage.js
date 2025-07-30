import CheckoutPage from "./CheckOutPage";
import LoginPage from "./LoginPage";
import ProductsPage from "./ProductsPage";

class CartPage {
  getProceedToCheckoutButton = () => cy.get("a.btn.btn-default.check_out");
  getCartPage = () => cy.get("a[href='/view_cart']");
  getHereLink = () => cy.get("#empty_cart a[href='/products']");
  getViewCart = () => cy.contains("Shopping Cart");

  clickProceedToCheckoutButton() {
    this.getProceedToCheckoutButton().click();
    return new CheckoutPage();
  }

  clickRegisterLoginButton() {
    cy.get(".modal-content").within(() => {
      cy.get("a[href='/login']").click();
    });
    return new LoginPage();
  }

  clickHereLink() {
    this.getHereLink().click();
    return new ProductsPage();
  }
}
export default CartPage;
