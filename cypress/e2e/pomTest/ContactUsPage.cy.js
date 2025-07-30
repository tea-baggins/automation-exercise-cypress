/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import Header from "../../pageObject/Header";
import ContactUsPage from "../../pageObject/ContactUsPage";
import testData from "../../fixtures/pom/testData.json";

describe("Contact Us Form", () => {
  const homePage = new HomePage();
  const header = new Header();
  const contactUsPage = new ContactUsPage();
  it("TC_06 | Verify contact us form", () => {
    homePage.homePageTextLogo().should("be.visible");
    header.clickContactUsLink();
    contactUsPage.getTitleGetInTouch().should("be.visible");
    contactUsPage
      .fillNameField(testData.name)
      .fillEmailField(testData.emailAddress)
      .fillMessageField(testData.message)
      .clickSubmitButton();
    contactUsPage.acceptConfirmationPopup();
    contactUsPage
      .getSuccessSubmissionMessage(testData.successSubmitionMessage)
      .should("be.visible");
    homePage.clickHomePageLogo();
    homePage.getHomePageLogo().should("be.visible");
  });
});
