/// <reference types="cypress" />

import Header from "../../pageObject/Header";
import HomePage from "../../pageObject/HomePage";
import ProductDetailsPage from "../../pageObject/ProductDetailsPage";
import ProductsPage from "../../pageObject/ProductsPage";
import testData from "../../fixtures/pom/testData.json";

describe("Add review on product", () => {
  const homePage = new HomePage();
  const header = new Header();
  const productsPage = new ProductsPage();
  const prductDetailsPage = new ProductDetailsPage();

  it("TC_21 | Verify add review on product", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.getAllProductsTitle().should("be.visible");
    productsPage.clickViewProductLink();
    prductDetailsPage.getWriteYourReviewTab().should("be.visible");
    prductDetailsPage
      .fillYourNameField(testData.name)
      .fillEmailAddressField(testData.emailAddress)
      .fillAddReviewHereText()
      .clickSubmitButton();
    prductDetailsPage.acceptThankYouMessagePopup(testData.ThankYouMessage);
    prductDetailsPage.getThankYouMessage().should("be.visible");
  });
});
