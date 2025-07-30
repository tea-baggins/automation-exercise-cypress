import BrandProductsPage from "./BrandProductsPage";
import ProductDetailsPage from "./ProductDetailsPage";
import ViewCartPage from "./ViewCartPage";

class ProductsPage {
  getAllProductsTitle = () => cy.get("h2.title.text-center");

  getViewProductLink = () => cy.get("a[href='/product_details/1']");
  getFirstProductName = () => cy.contains("Blue Top");
  getAddToCartButton1 = () => cy.get('.btn[data-product-id="1"]').first();
  getAddToCartButton2 = () => cy.get('.btn[data-product-id="2"]').eq(0);
  getContinueShoppingButton = () => cy.contains("Continue Shopping");
  getSecondProductName = () => cy.contains("Men Tshirt");
  getViewCartlinkModal = () => cy.get("a[href='/view_cart']");
  getBrandsLeftSideBar = () => cy.contains("Brands");
  getPoloBrandLeftSideBar = () => cy.get("a[href='/brand_products/Polo']");
  getSoftStretchJeans = () =>
    cy.get("a[data-product-id='33']").filter(":visible");

  clickViewProductLink() {
    this.getViewProductLink().click();
    return new ProductDetailsPage();
  }

  clickAddToCartButton1() {
    this.getAddToCartButton1().click();
    return this;
  }

  clickContinueShoppingButton() {
    this.getContinueShoppingButton().click();
    return this;
  }

  clickAddToCartButton2() {
    this.getAddToCartButton2().click();
    return this;
  }

  clickAddToCardSoftSretchJeansButton() {
    this.getSoftStretchJeans().click();
    return this;
  }

  clickViewCartLinkModal() {
    cy.get(".modal-content").within(() => {
      cy.get("a[href='/view_cart']").click();
    });
    return new ViewCartPage();
  }

  clickPoloBrandLeftSideBar() {
    this.getPoloBrandLeftSideBar().click();
    return new BrandProductsPage();
  }
}
export default ProductsPage;
