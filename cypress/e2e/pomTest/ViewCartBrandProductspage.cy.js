/// <reference types="cypress" />

import BrandProductsPage from "../../pageObject/BrandProductsPage";
import Header from "../../pageObject/Header";
import HomePage from "../../pageObject/HomePage";
import ProductsPage from "../../pageObject/ProductsPage";

describe("View and Cart Brand Products", () => {
  const homePage = new HomePage();
  const header = new Header();
  const productsPage = new ProductsPage();
  const brandProductsPage = new BrandProductsPage();

  it("TC_19 | Verify View and Cart Brand Products", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.getBrandsLeftSideBar().should("be.visible");
    productsPage.clickPoloBrandLeftSideBar();
    brandProductsPage.getBrandProductsPoloTitle().should("be.visible");
    brandProductsPage.clickMadameBrandLeftSideBarLink();
    brandProductsPage.getMadameBrandLeftSideBarLink().should("be.visible");
  });
});
