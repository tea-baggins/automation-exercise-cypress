/// <reference types="cypress" />

import Footer from "../../pageObject/Footer";
import HomePage from "../../pageObject/HomePage";
import loginPageData from "../../fixtures/pom/loginPageData.json";
import testData from "../../fixtures/pom/testData.json";
import Header from "../../pageObject/Header";

describe("Verify Subscription in home page", () => {
  const homePage = new HomePage();
  const footer = new Footer();
  const header = new Header();

  it("TC_10 | Verify Subscription in home page", () => {
    homePage.getHomePageLogo().should("be.visible");
    footer.getSubscriptionText().should("be.visible");
    footer.fillYorEmailAddressField(loginPageData.emailAddress);
    footer.clickSubscribeButton();
    footer
      .getSubscriptionSuccessMessage(testData.successSubscriptionMessage)
      .should("be.visible");
  });

  it("TC_11 | Verify Subscription in Cart page", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickCartLink();
    footer.scrollToBottom();
    footer.getSubscriptionText().should("be.visible");
    footer.fillYorEmailAddressField(loginPageData.emailAddress);
    footer
      .clickSubscribeButton()
      .getSubscriptionSuccessMessage(testData.successSubscriptionMessage);
  });
});
