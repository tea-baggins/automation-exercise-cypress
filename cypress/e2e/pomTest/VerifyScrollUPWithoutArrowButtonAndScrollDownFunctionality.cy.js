/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";

describe("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
  const homePage = new HomePage();

  it("TC_26 | Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
    homePage.getHomePageLogo().should("be.visible");
    homePage.scrollToBottom();
    homePage.getSubscriptionText().should("be.visible");
    homePage.scrollToTop();
    homePage
      .getFullFledgedPracticeWebsiteForAutomationEngineerText()
      .should("be.visible");
  });
});
