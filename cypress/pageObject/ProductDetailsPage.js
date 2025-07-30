class ProductDetailsPage {
  getProductName = () => cy.contains("h2", "Blue Top");
  getCategory = () => cy.contains("Category: Women > Tops");
  getPrice = () => cy.contains("Rs. 500");
  getAvailability = () => cy.contains("Availability");
  getCondition = () => cy.contains("Condition");
  getBrand = () => cy.contains("Brand");
  getProductQuantity = () => cy.get("input#quantity");
  getAddToCartButton = () => cy.contains("button", "Add to cart");
  getWriteYourReviewTab = () => cy.get("a[href='#reviews']");
  getYourNameFileld = () => cy.get("input#name");
  getEmailAddressField = () => cy.get("input#email");
  getAddReviewHereText = () => cy.get("textarea#review");
  getSubmitButton = () => cy.get("button#button-review");
  getThankYouMessage = () => cy.get("div.alert-success.alert");

  clickAddToCartButton() {
    this.getAddToCartButton().click();
    return this;
  }

  fillYourNameField(name) {
    this.getYourNameFileld().type(name);
    return this;
  }

  fillEmailAddressField(email) {
    this.getEmailAddressField().type(email);
    return this;
  }

  fillAddReviewHereText() {
    this.getAddReviewHereText().type("Here is my message!");
    return this;
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
    return this;
  }

  acceptThankYouMessagePopup() {
    cy.on("dialog", (alert) => alert.accept());
  }
}
export default ProductDetailsPage;
