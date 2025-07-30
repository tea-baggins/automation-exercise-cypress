import AccountCreatedPage from "./AccountCreatedPage";

class SignupPage {
  getGender = () => cy.get("#id_gender2");
  getPassword = () => cy.get("input#password.form-control");
  getDate = () => cy.get("select#days.form-control");
  getMonth = () => cy.get("select#months.form-control");
  getYear = () => cy.get("select#years.form-control");
  getFirstName = () => cy.get("#first_name");
  getLastName = () => cy.get("#last_name");
  getAddress = () => cy.get("input#address1.form-control");
  getCountry = () => cy.get("select#country");
  getState = () => cy.get("input#state.form-control");
  getCity = () => cy.get("input[data-qa='city'].form-control");
  getZipcode = () => cy.get("input#zipcode.form-control");
  getMobileNumber = () => cy.get("input#mobile_number.form-control");
  getCreateAccountButton = () => cy.get("button[data-qa='create-account']");

  clickGenderRadio() {
    this.getGender().click();
    return this;
  }

  clickPassword(password) {
    this.getPassword().type(password);
    return this;
  }

  selectDate() {
    this.getDate().select("25");
    return this;
  }

  selectMonths() {
    this.getMonth().select("August");
    return this;
  }

  selectYear() {
    this.getYear().select("2000");
    return this;
  }

  fillFirstName(firstName) {
    this.getFirstName().type(firstName);
    return this;
  }

  fillLastName(lastName) {
    this.getLastName().type(lastName);
    return this;
  }

  fillAddress(address) {
    this.getAddress().type(address);
    return this;
  }
  fillCountry(country) {
    this.getCountry().select(country);
    return this;
  }

  fillState(state) {
    this.getState().type(state);
    return this;
  }

  fillCity(city) {
    this.getCity().type(city);
    return this;
  }

  fillZipcode(zipCode) {
    this.getZipcode().type(zipCode);
    return this;
  }

  fillMobileNumber(mobileNumber) {
    this.getMobileNumber().type(mobileNumber);
    return this;
  }

  clickCreateAccountButton() {
    this.getCreateAccountButton().click();
    return new AccountCreatedPage();
  }
}
export default SignupPage;
