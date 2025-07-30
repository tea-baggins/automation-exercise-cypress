import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import ProductsPage from "./ProductsPage";
import RegisterUserPage from "./RegisterUserPage";
import TestCasesPage from "./TestCasesPage";

class Header {
  getLogoutLink = () => cy.get("a[href='/logout']");
  getLoginLink = () => cy.get("a[href='/login']:visible");
  getContactUsLink = () => cy.get('a[href="/contact_us"]');
  getTestCasesLink = () => cy.get("li a[href='/test_cases']");
  getProductsLink = () => cy.get("a[href='/products']");
  getCartLink = () => cy.get("div.shop-menu.pull-right a[href='/view_cart']");
  getLoggedInAsUserNameText = () => cy.contains("Logged in as my name");
  getLoggedInAsUserName = () => cy.contains("Logged in as August");
  getDeleteAccountLink = () => cy.get("a[href='/delete_account']");

  clickLogoutLink() {
    this.getLogoutLink().click();
    return new RegisterUserPage();
  }

  clickLoginLink() {
    this.getLoginLink().click();
    return new RegisterUserPage();
  }
  clickLoginLink() {
    this.getLoginLink().click();
    return new LoginPage();
  }

  clickContactUsLink() {
    this.getContactUsLink().click();
    return this;
  }

  clickTestCasesLink() {
    this.getTestCasesLink().click();
    return new TestCasesPage();
  }

  clickProductLink() {
    this.getProductsLink().click();
    return new ProductsPage();
  }

  clickCartLink() {
    this.getCartLink().click();
    return new CartPage();
  }

  clickDeleteAccountLink() {
    this.getDeleteAccountLink().click();
    return this;
  }
}
export default Header;
