/// <reference types="cypress" />

import AccountCreatedPage from "../../pageObject/AccountCreatedPage";
import Header from "../../pageObject/Header";
import HomePage from "../../pageObject/HomePage";
import ProductsPage from "../../pageObject/ProductsPage";
import RegisterUserPage from "../../pageObject/RegisterUserPage";
import SignupPage from "../../pageObject/SignupPage";
import ViewCartPage from "../../pageObject/ViewCartPage";
import { generateUniqueEmail } from "../../utils/helpers";
import loginPageData from "../../fixtures/pom/loginPageData.json";
import accountInformation from "../../fixtures/pom/accountInformation.json";
import CheckoutPage from "../../pageObject/CheckOutPage";
import testData from "../../fixtures/pom/testData.json";
import PaymentPage from "../../pageObject/PaymentPage";
import paymentInformation from "../../fixtures/pom/paymentInformation.json";
import PaymentDonePage from "../../pageObject/PaymentDonePage";
import "cypress-downloadfile/lib/downloadFileCommand";
import DeleteAccountPage from "../../pageObject/DeleteAccountPage";

describe("Download Invoice after purchase order", () => {
  const header = new Header();
  const homePage = new HomePage();
  const viewCartPage = new ViewCartPage();
  const productsPage = new ProductsPage();
  const registerUserPage = new RegisterUserPage();
  const signUpPage = new SignupPage();
  const accountCreatedPage = new AccountCreatedPage();
  const checkoutPage = new CheckoutPage();
  const paymentPage = new PaymentPage();
  const paymentDonePage = new PaymentDonePage();
  const deleteAccountpage = new DeleteAccountPage();

  it("TC_24 | Download Invoice after purchase order", () => {
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
    viewCartPage.clickProceedToCheckoutButton();
    checkoutPage.getAddressDetails().should("be.visible");
    checkoutPage.fillAddCommentTextField(testData.addComment);
    checkoutPage.clickPlaceOrderButton();
    paymentPage
      .fillNameOnCardField(paymentInformation.nameOnCard)
      .fillCardNumberField(paymentInformation.cardNumber)
      .fillCVCField(paymentInformation.cvc)
      .fillExpirationMonthField(paymentInformation.expirationMonth)
      .fillExpirationYearField(paymentInformation.expirationYear)
      .clickPayAndConfirmOrderButton();
    paymentDonePage.clickDownloadInvoiceButton();
    paymentDonePage.getInvoiceDownloadUrl().then((url) => {
      const baseUrl =
        Cypress.config("baseUrl") || "https://automationexercise.com";
      const absUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

      cy.downloadFile(absUrl, "cypress/downloads", "invoice.txt");
      cy.readFile("cypress/downloads/invoice.txt").should("exist");
    });
    paymentDonePage.clickContinueButton();
    header.clickDeleteAccountLink();
    deleteAccountpage.clickContinueButton();
  });
});
