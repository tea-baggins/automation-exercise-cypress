class ContactUsPage {
  getInputFieldName = () => cy.get("[data-qa='name']");
  getInputFieldEmail = () => cy.get("input[data-qa='email']");
  getInputFieldMessage = () => cy.get("[data-qa='message']");
  getSubmitButton = () => cy.get("input[data-qa='submit-button']");

  getTitleGetInTouch = () => cy.contains("Get In Touch");
  getSuccessSubmissionMessage = () => cy.get("div.status.alert.alert-success");

  fillNameField(name) {
    this.getInputFieldName().type(name);
    return this;
  }

  fillEmailField(email) {
    this.getInputFieldEmail().type(email);
    return this;
  }

  fillMessageField(message) {
    this.getInputFieldMessage().type(message);
    return this;
  }

  acceptConfirmationPopup() {
    cy.on("dialog", (alert) => alert.accept());
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
    return this;
  }
}
export default ContactUsPage;
