/// <reference types="cypress" />

import HomePage from "../../pageObject/HomePage";
import Header from "../../pageObject/Header";
import CartPage from "../../pageObject/CartPage";
import ProductsPage from "../../pageObject/ProductsPage";
import RegisterUserPage from "../../pageObject/RegisterUserPage";
import SignupPage from "../../pageObject/SignupPage";
import { generateUniqueEmail } from "../../utils/helpers";
import loginPageData from "../../fixtures/pom/loginPageData.json";
import accountInformation from "../../fixtures/pom/accountInformation.json";
import AccountCreatedPage from "../../pageObject/AccountCreatedPage";
import testData from "../../fixtures/pom/testData.json";
import PaymentPage from "../../pageObject/PaymentPage";
import paymentInformation from "../../fixtures/pom/paymentInformation.json";
import OrderPlacedPage from "../../pageObject/OrderPalcedPage";
import DeleteAccountPage from "../../pageObject/DeleteAccountPage";
import CheckoutPage from "../../pageObject/CheckOutPage";
import ViewCartPage from "../../pageObject/ViewCartPage";

describe("Place Order| Register while Checkout", () => {
  const homePage = new HomePage();
  const header = new Header();
  const cartPage = new CartPage();
  const productsPage = new ProductsPage();
  const registerUserPage = new RegisterUserPage();
  const signUpPage = new SignupPage();
  const accountCreatedPage = new AccountCreatedPage();
  const checkoutPage = new CheckoutPage();
  const paymentPage = new PaymentPage();
  const orderPlacedPage = new OrderPlacedPage();
  const deleteAccountPage = new DeleteAccountPage();
  const viewCartPage = new ViewCartPage();

  it("TC_14 |Verify palce order| Register while Checkout", () => {
    const uniqueEmail = generateUniqueEmail();
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
    productsPage.clickAddToCartButton1().clickContinueShoppingButton();
    header.clickCartLink();
    viewCartPage.getCartPage().should("be.visible");
    viewCartPage.clickProceedToCheckoutButton();
    checkoutPage.clickLoginRegisterLink();
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
    header.clickCartLink();
    cartPage.clickProceedToCheckoutButton();
    checkoutPage.getAddressDetails().should("be.visible");
    checkoutPage.getReviewYourOrder().should("be.visible");
    checkoutPage.fillAddCommentTextField(testData.addComment);
    checkoutPage.clickPlaceOrderButton();
    paymentPage
      .fillNameOnCardField(paymentInformation.nameOnCard)
      .fillCardNumberField(paymentInformation.cardNumber)
      .fillCVCField(paymentInformation.cvc)
      .fillExpirationMonthField(paymentInformation.expirationMonth)
      .fillExpirationYearField(paymentInformation.expirationYear)
      .clickPayAndConfirmOrderButton();
    orderPlacedPage.getOrderPlacedText().should("exist");
    orderPlacedPage.clickContinueButton();
    deleteAccountPage.clickDeleteAccountLink();
    deleteAccountPage.getDeletedMessage().should("be.visible");
    deleteAccountPage.clickContinueButton();
  });

  it("TC_15 | Verify place order| Register before Checkout ", () => {
    const uniqueEmail = generateUniqueEmail();
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
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
    header.clickCartLink();
    cartPage.getCartPage().should("be.visible");
    cartPage.clickHereLink();
    productsPage.clickAddToCartButton1();
    productsPage.clickViewCartLinkModal();
    cartPage.getViewCart().should("be.visible");
    cartPage.clickProceedToCheckoutButton();
    checkoutPage.getAddressDetails().should("be.visible");
    checkoutPage.getReviewYourOrder().should("be.visible");
    checkoutPage.fillAddCommentTextField(testData.addComment);
    checkoutPage.clickPlaceOrderButton();
    paymentPage
      .fillNameOnCardField(paymentInformation.nameOnCard)
      .fillCardNumberField(paymentInformation.cardNumber)
      .fillCVCField(paymentInformation.cvc)
      .fillExpirationMonthField(paymentInformation.expirationMonth)
      .fillExpirationYearField(paymentInformation.expirationYear)
      .clickPayAndConfirmOrderButton();
    orderPlacedPage.getOrderPlacedText().should("exist");
    orderPlacedPage.clickContinueButton();
    deleteAccountPage.clickDeleteAccountLink();
    deleteAccountPage.getDeletedMessage().should("be.visible");
    deleteAccountPage.clickContinueButton();
  });

  it("TC_16| Login before Checkout ", () => {
    const uniqueEmail = generateUniqueEmail();
    homePage.getHomePageLogo().should("be.visible");
    header.clickProductLink();
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
    productsPage.clickAddToCartButton1();
    productsPage.clickViewCartLinkModal();
    cartPage.clickProceedToCheckoutButton();
    checkoutPage.getAddressDetails().should("be.visible");
    checkoutPage.getReviewYourOrder().should("be.visible");
    checkoutPage.fillAddCommentTextField(testData.addComment);
    checkoutPage.clickPlaceOrderButton();
    paymentPage
      .fillNameOnCardField(paymentInformation.nameOnCard)
      .fillCardNumberField(paymentInformation.cardNumber)
      .fillCVCField(paymentInformation.cvc)
      .fillExpirationMonthField(paymentInformation.expirationMonth)
      .fillExpirationYearField(paymentInformation.expirationYear)
      .clickPayAndConfirmOrderButton();
    deleteAccountPage.clickDeleteAccountLink();
    deleteAccountPage.getDeletedMessage().should("be.visible");
    deleteAccountPage.clickContinueButton();
  });
});
