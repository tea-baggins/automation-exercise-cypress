/// <reference types="cypress" />

import CategoryProductsPage from "../../pageObject/CategoryProductsPage";
import HomePage from "../../pageObject/HomePage";

describe("View Category Products", () => {
  const homePage = new HomePage();
  const categoryProductsPage = new CategoryProductsPage();

  it("TC_18 | Verify View Category Products", () => {
    homePage.getHomePageLogo().should("be.visible");
    homePage.getCategoryLeftSideBar().should("be.visible");
    homePage.clickWomenLinkLeftSideBar();
    homePage.clickCategoryLinkUnderWomenCategory();
    categoryProductsPage.getCategoryPageTitleWomen().should("be.visible");
    homePage.clickMenLinkLeftSideBar();
    homePage.clickCategoryLinkUnderMenCategory();
    categoryProductsPage.getCategoryPageTitleMen().should("be.visible");
  });
});
