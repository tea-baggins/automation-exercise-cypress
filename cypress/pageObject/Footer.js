class Footer {
  getSubscriptionText = () => cy.get("div.single-widget");
  getYorEmailAddressField = () => cy.get("#susbscribe_email");
  getSubscribeButton = () => cy.get("button#subscribe");
  getSubscriptionSuccessMessage = () => cy.get("#success-subscribe");

  fillYorEmailAddressField(emailAddress) {
    this.getYorEmailAddressField().type(emailAddress);
  }

  clickSubscribeButton() {
    this.getSubscribeButton().click();
    return this;
  }

  scrollToBottom() {
    cy.scrollTo("bottom", { duration: 2000 });
    return this;
  }
}
export default Footer;
