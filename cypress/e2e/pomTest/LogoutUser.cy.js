/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import loginPageData from "../../fixtures/pom/loginPageData.json";
import Header from "../../pageObject/Header";
import LoginPage from "../../pageObject/LoginPage";
import { generateUniqueEmail } from "../../utils/helpers";
import RegisterUserPage from "../../pageObject/RegisterUserPage";
import SignupPage from "../../pageObject/SignupPage";
import accountInformation from "../../fixtures/pom/accountInformation.json";
import AccountCreatedPage from "../../pageObject/AccountCreatedPage";

describe("Logout User", () => {
  const homePage = new HomePage();
  const header = new Header();
  const loginPage = new LoginPage();
  const registerUserPage = new RegisterUserPage();
  const signUpPage = new SignupPage();
  const accountCreatedPage = new AccountCreatedPage();

  it("TC_04 | Verify lgout user", () => {
    const uniqueEmail = generateUniqueEmail();
    homePage.getHomePageLogo().should("be.visible");
    registerUserPage
      .clickLoginLink()
      .fillNameField(loginPageData.name)
      .fillEmailAddressField(uniqueEmail)
      .clickSignupButton();
    signUpPage
      .clickGenderRadio()
      .clickPassword(accountInformation.password)
      .selectDate(accountInformation.dateOfBirth)
      .selectMonths(accountInformation.dateOfBirth)
      .selectYear(accountInformation.dateOfBirth)
      .fillFirstName(accountInformation.firstName)
      .fillLastName(accountInformation.lastName)
      .fillAddress(accountInformation.address)
      .fillCountry(accountInformation.country)
      .fillState(accountInformation.state)
      .fillCity(accountInformation.city)
      .fillZipcode(accountInformation.zipCode)
      .fillMobileNumber(accountInformation.mobileNumber)
      .clickCreateAccountButton();
    accountCreatedPage
      .getAccountCreatedText()
      .should("be.visible")
      .and("have.text", "Account Created!");
    accountCreatedPage.clickContinueButton();
    header.clickLogoutLink();
    loginPage.getLoginToYourAccountForm().should("be.visible");
  });
});
