/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import Header from "../../pageObject/Header";
import ProductsPage from "../../pageObject/ProductsPage";
import ProductDetailsPage from "../../pageObject/ProductDetailsPage";

describe("Verify All Products and product detail page", () => {
  const homePage = new HomePage();
  const header = new Header();
  const productsPage = new ProductsPage();
  const productDetailsPage = new ProductDetailsPage();

  it("TC_08 | Verify All Products and product detail page", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.getAllProductsTitle().should("be.visible");
    productsPage.clickViewProductLink();
    productDetailsPage.getProductName().should("be.visible");
    productDetailsPage.getCategory().should("be.visible");
    productDetailsPage.getPrice().should("be.visible");
    productDetailsPage.getAvailability().should("be.visible");
    productDetailsPage.getCondition().should("be.visible");
    productDetailsPage.getBrand().should("be.visible");
  });
});
