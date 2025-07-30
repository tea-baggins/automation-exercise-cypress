class BrandProductsPage {
  getBrandProductsPoloTitle = () => cy.contains("Brand - Polo Products");
  getPoloBrandLinkLeftsSideBar = () => cy.get("a[href='/brand_products/Polo']");
  getMadameBrandLeftSideBarLink = () =>cy.get("a[href='/brand_products/Madame']");

  clickPoloBrandLinkLeftsSideBar() {
    this.getPoloBrandLinkLeftsSideBar().click();
    return this;
  }

  clickMadameBrandLeftSideBarLink() {
    this.getMadameBrandLeftSideBarLink().click();
    return this;
  }
}
export default BrandProductsPage;
