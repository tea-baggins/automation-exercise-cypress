/// <reference types="cypress" />

import AccountCreatedPage from "../../pageObject/AccountCreatedPage";
import Header from "../../pageObject/Header";
import HomePage from "../../pageObject/HomePage";
import RegisterUserPage from "../../pageObject/RegisterUserPage";
import SignupPage from "../../pageObject/SignupPage";
import { generateUniqueEmail } from "../../utils/helpers";
import loginPageData from "../../fixtures/pom/loginPageData.json";
import accountInformation from "../../fixtures/pom/accountInformation.json";
import ProductsPage from "../../pageObject/ProductsPage";
import ViewCartPage from "../../pageObject/ViewCartPage";
import CheckoutPage from "../../pageObject/CheckOutPage";
import DeleteAccountPage from "../../pageObject/DeleteAccountPage";

describe("Verify address details in checkout page", () => {
  const homePage = new HomePage();
  const header = new Header();
  const registerUserPage = new RegisterUserPage();
  const signUpPage = new SignupPage();
  const accountCreatedPage = new AccountCreatedPage();
  const productsPage = new ProductsPage();
  const viewCartPage = new ViewCartPage();
  const checkoutPage = new CheckoutPage();
  const deleteAccountPage = new DeleteAccountPage();

  it("TC_23 | Verify address details in checkout page", () => {
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
    header.getLoggedInAsUserName().should("be.visible");
    header.clickProductLink();
    productsPage.clickAddToCartButton1().clickContinueShoppingButton();
    header.clickCartLink();
    viewCartPage.getCartPage().should("be.visible");
    viewCartPage.clickProceedToCheckoutButton();
    checkoutPage.addressDetails();
    header.clickDeleteAccountLink();
    deleteAccountPage.getDeletedMessage().should("be.visible");
    deleteAccountPage.clickContinueButton();
  });
});
