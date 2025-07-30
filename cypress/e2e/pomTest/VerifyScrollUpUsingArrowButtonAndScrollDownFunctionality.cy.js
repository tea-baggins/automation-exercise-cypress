/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";

describe("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
  const homePage = new HomePage();

  it("TC_25 | Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
    homePage.getHomePageLogo().should("be.visible");
    homePage.scrollToBottom();
    homePage.getSubscriptionText().should("be.visible");
    homePage.scrollToTopViaArrow();
    homePage
      .getFullFledgedPracticeWebsiteForAutomationEngineerText()
      .should("be.visible");
  });
});
