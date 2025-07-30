/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import loginPageData from "../../fixtures/pom/loginPageData.json";
import LoginPage from "../../pageObject/LoginPage";
import Header from "../../pageObject/Header";

describe("Login User with incorrect email and password", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const header = new Header();

  it("TC_03 | Verify user with incorrect email and password", () => {
    homePage.homePageTextLogo().should("be.visible");
    header.clickLoginLink();
    loginPage.getLoginToYourAccountForm().should("be.visible");
    loginPage
      .fillLoginEmailAddressField(loginPageData.incorrectEmail)
      .fillLoginPasswordField(loginPageData.wrongPassword)
      .clickLoginButton();
    loginPage.getErrorMessage().should("be.visible");
  });
});
