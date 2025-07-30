/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import Header from "../../pageObject/Header";

describe("Verify Test Cases Page", () => {
  const homePage = new HomePage();
  const header = new Header();
  
  it("TC_07 | Verify test case page", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickTestCasesLink();
    header.getTestCasesLink().should("be.visible");
  });
});
