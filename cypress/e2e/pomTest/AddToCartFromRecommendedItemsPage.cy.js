/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import ViewCartPage from "../../pageObject/ViewCartPage";

describe("Add to cart from Recommended items", () => {
  const homePage = new HomePage();
  const viewCartPage = new ViewCartPage();

  it("TC_22| Verify add to cart from Recommended items", () => {
    homePage.getHomePageLogo().should("be.visible");
    homePage.scrollToRecommendedItems();
    homePage.getRecommendedItems().should("be.visible");
    homePage.clickAddToCartButtonForRecommendedItem();
    homePage.clickViewCartLinkModal();
    viewCartPage.getCartPage().should("be.visible");
  });
});
