/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import RegisterUserPage from "../../pageObject/RegisterUserPage";
import loginPageData from "../../fixtures/pom/loginPageData.json";
import Header from "../../pageObject/Header";
import SignupPage from "../../pageObject/SignupPage";
import accountInformation from "../../fixtures/pom/accountInformation.json";
import AccountCreatedPage from "../../pageObject/AccountCreatedPage";
import DeleteAccountPage from "../../pageObject/DeleteAccountPage";
import { generateUniqueEmail } from "../../utils/helpers";
import LoginPage from "../../pageObject/LoginPage";

describe("Login User with correct email and password", () => {
  const homePage = new HomePage();
  const registerUserPage = new RegisterUserPage();
  const header = new Header();
  const signUpPage = new SignupPage();
  const accountCreatedPage = new AccountCreatedPage();
  const deleteAccountPage = new DeleteAccountPage();
  const loginPage = new LoginPage();

  it("TC_02 | Verify Login User with correct email and password", () => {
    const uniqueEmail = generateUniqueEmail();
    homePage.getHomePageLogo().should("be.visible");
    header.clickLoginLink();
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
    registerUserPage
      .clickLoginLink()
      .getLoginToYourAccountForm()
      .should("be.visible");
    loginPage.getLoginToYourAccountForm().should("be.visible");
    loginPage
      .fillLoginEmailAddressField(uniqueEmail)
      .fillLoginPasswordField(loginPageData.password)
      .clickLoginButton();
    header.getLoggedInAsUserName().should("be.visible");
    deleteAccountPage
      .clickDeleteAccountLink()
      .getDeletedMessage()
      .should("be.visible")
      .and("have.text", "Account Deleted!");
    deleteAccountPage.clickContinueButton();
    homePage.homePageTextLogo().should("be.visible");
  });
});
