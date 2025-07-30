/// <reference types="cypress" />

import RegisterUserPage from "../../pageObject/RegisterUserPage";
import loginPageData from "../../fixtures/pom/loginPageData.json";
import SignupPage from "../../pageObject/SignupPage";
import accountInformation from "../../fixtures/pom/accountInformation.json";
import AccountCreatedPage from "../../pageObject/AccountCreatedPage";
import DeleteAccountPage from "../../pageObject/DeleteAccountPage";
import HomePage from "../../pageObject/HomePage";
import { generateUniqueEmail } from "../../utils/helpers";
import LoginPage from "../../pageObject/LoginPage";
import Header from "../../pageObject/Header";
import testData from "../../fixtures/pom/testData.json";

describe("Register User |Create register user", () => {
  const registerUserPage = new RegisterUserPage();
  const signUpPage = new SignupPage();
  const accountCreatedPage = new AccountCreatedPage();
  const deleteAccountPage = new DeleteAccountPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const header = new Header();

  it("TC_01 |Verify register user", () => {
    const uniqueEmail = generateUniqueEmail();
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
    deleteAccountPage
      .clickDeleteAccountLink()
      .getDeletedMessage()
      .should("be.visible")
      .and("have.text", "Account Deleted!");
    deleteAccountPage.clickContinueButton();
    homePage.homePageTextLogo().should("be.visible");
  });

  it("TC_05 |Register User with existing email", () => {
    homePage.getHomePageLogo().should("be.visible");
    header.clickLoginLink();
    loginPage.getSignUpForm().should("be.visible");
    loginPage
      .fillNameField(testData.name)
      .fillEmailAddressField(testData.emailAddress)
      .clickSignupButton();
    loginPage.getErrorEmaiAddressExists().should("be.visible");
  });
});
