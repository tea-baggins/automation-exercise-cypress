class SearchProductPage {
  getSearchField = () => cy.get("input#search_product.form-control.input-lg");
  getSearchButton = () => cy.get("button#submit_search");
  getSearchedProducts = () => cy.contains("Searched Products");
  getProductsRelatedToSeach = () => cy.get("a[href='/product_details/42']");

  fillSearchField() {
    this.getSearchField().type("top");
    return this;
  }

  clearSearchFieald() {
    this.getSearchField().clear();
    return this;
  }

  fillSearchFieldJeans() {
    this.getSearchField().type("jeans");
    return this;
  }

  clickSearchButton() {
    this.getSearchButton().click();
    return this;
  }
}
export default SearchProductPage;
