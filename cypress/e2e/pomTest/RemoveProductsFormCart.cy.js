/// <reference types="cypress" />

import Header from "../../pageObject/Header";
import HomePage from "../../pageObject/HomePage";
import ProductsPage from "../../pageObject/ProductsPage";
import ViewCartPage from "../../pageObject/ViewCartPage";

describe("Remove Products From Cart", () => {
  const homePage = new HomePage();
  const header = new Header();

  const productsPage = new ProductsPage();
  const viewCartPage = new ViewCartPage();

  it("TC_17 | Verify Remove Products From Cart", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.clickAddToCartButton1().clickContinueShoppingButton();
    header.clickCartLink();
    viewCartPage.getCartPage().should("be.visible");
    viewCartPage.clickCartDeleteButton();
    viewCartPage.getCartIsEmptyMessage().should("be.visible");
  });
});
