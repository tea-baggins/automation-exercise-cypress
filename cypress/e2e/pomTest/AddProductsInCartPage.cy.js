/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import Header from "../../pageObject/Header";
import ProductsPage from "../../pageObject/ProductsPage";
import ViewCartPage from "../../pageObject/ViewCartPage";

describe("Add Products in Cart", () => {
  const homePage = new HomePage();
  const header = new Header();
  const productsPage = new ProductsPage();
  const viewCartPage = new ViewCartPage();

  it("TC_11 | Verify add products in cart", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.getFirstProductName().should("be.visible");
    productsPage.clickAddToCartButton1().clickContinueShoppingButton();
    productsPage.getSecondProductName().should("be.visible");
    productsPage.clickAddToCartButton2().clickViewCartLinkModal();
    viewCartPage.getCartInfo().should("be.visible");
    viewCartPage.getCartPrice().should("be.visible");
    viewCartPage.getProductQuantity().should("be.visible");
    viewCartPage.getTotalPrice().should("be.visible");
  });
});
