/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import Header from "../../pageObject/Header";
import ProductsPage from "../../pageObject/ProductsPage";
import SearchProductPage from "../../pageObject/SearchProductPage";

describe("Search Product", () => {
  const homePage = new HomePage();
  const header = new Header();
  const productsPage = new ProductsPage();
  const searchProductPage = new SearchProductPage();

  it("TC_09 | Verify Search Product page", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.getAllProductsTitle().should("be.visible");
    searchProductPage.fillSearchField().clickSearchButton();
    searchProductPage.getSearchedProducts().should("be.visible");
    searchProductPage.getProductsRelatedToSeach().should("be.visible");
  });
});
