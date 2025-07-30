/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import Header from "../../pageObject/Header";
import ProductsPage from "../../pageObject/ProductsPage";
import ViewCartPage from "../../pageObject/ViewCartPage";
import ProductDetailsPage from "../../pageObject/ProductDetailsPage";

describe("Verify Product quantity in Cart", () => {
  const homePage = new HomePage();
  const header = new Header();
  const productsPage = new ProductsPage();
  const viewCartPage = new ViewCartPage();
  const productDetailsPage = new ProductDetailsPage();

  it("TC_13 | Verify product quantity in cart", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.getAllProductsTitle().should("be.visible");
    productsPage.clickViewProductLink();
    productDetailsPage.getProductName().should("be.visible");
    productDetailsPage.getProductQuantity().clear().type("4");
    productDetailsPage.clickAddToCartButton();
    productsPage.clickViewCartLinkModal();
    viewCartPage.getProductQuantity().should("contain.text", "4");
  });
});
