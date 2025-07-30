/// <reference types="cypress" />

import Header from "../../pageObject/Header";
import HomePage from "../../pageObject/HomePage";
import LoginPage from "../../pageObject/LoginPage";
import ProductsPage from "../../pageObject/ProductsPage";
import SearchProductPage from "../../pageObject/SearchProductPage";
import ViewCartPage from "../../pageObject/ViewCartPage";
import loginPageData from "../../fixtures/pom/loginPageData.json";

describe("Search Products and Verify Cart After Login", () => {
  const homePage = new HomePage();
  const header = new Header();
  const productsPage = new ProductsPage();
  const searchProductPage = new SearchProductPage();
  const viewCartPage = new ViewCartPage();
  const loginPage = new LoginPage();

  it("TC_20 | Verify search products and cart after login ", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.getAllProductsTitle().should("be.visible");
    searchProductPage.fillSearchField().clickSearchButton();
    searchProductPage.getSearchedProducts().should("be.visible");
    searchProductPage.getProductsRelatedToSeach().should("be.visible");
    productsPage.clickAddToCartButton1().clickContinueShoppingButton();
    searchProductPage.clearSearchFieald();
    searchProductPage.fillSearchFieldJeans().clickSearchButton();
    productsPage
      .clickAddToCardSoftSretchJeansButton()
      .clickContinueShoppingButton();
    header.clickCartLink();
    viewCartPage.getCartPage().should("be.visible");
    header.clickLoginLink();
    loginPage
      .fillLoginEmailAddressField(loginPageData.emailAddress)
      .fillLoginPasswordField(loginPageData.password)
      .clickLoginButton();
    header.clickCartLink();
    viewCartPage.getCartInfo().should("be.visible");
  });
});
