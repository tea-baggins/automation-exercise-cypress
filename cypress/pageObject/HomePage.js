import CategoryProductsPage from "./CategoryProductsPage";

class HomePage {
  getHomePageLogo = () => cy.get(".logo.pull-left");
  getCategoryLeftSideBar = () => cy.get("div.left-sidebar");
  getWomenLinkLeftSideBar = () => cy.get("a[href='#Women']");
  getCategoryLinkUnderWomenCategory = () =>
    cy.get("a[href='/category_products/1']");
  getMenLinkLeftSideBar = () => cy.get("a[href='#Men']");
  getCategoryLinkUnderMenCategory = () =>
    cy.get("a[href='/category_products/3']");
  getRecommendedItems = () => cy.get("div#recommended-item-carousel");
  getRecommendedItemsSection = () => cy.contains("Stylish Dress");
  getContinueShoppingButton = () => cy.contains("Continue Shopping");
  getSubscriptionText = () => cy.contains("Subscription");
  getRifgtSideArrowToMoveUp = () => cy.get("#scrollUp");
  getFullFledgedPracticeWebsiteForAutomationEngineerText = () =>
    cy.contains("Full-Fledged practice website for Automation Engineer");

  homePageTextLogo() {
    return this.getHomePageLogo();
  }

  clickHomePageLogo() {
    this.getHomePageLogo().click();
    return this;
  }

  clickWomenLinkLeftSideBar() {
    this.getWomenLinkLeftSideBar().click();
    return this;
  }

  clickCategoryLinkUnderWomenCategory() {
    this.getCategoryLinkUnderWomenCategory().click();
    return new CategoryProductsPage();
  }

  clickMenLinkLeftSideBar() {
    this.getMenLinkLeftSideBar().click();
    return this;
  }

  clickCategoryLinkUnderMenCategory() {
    this.getCategoryLinkUnderMenCategory().click();
    return new CategoryProductsPage();
  }

  scrollToRecommendedItems() {
    this.getRecommendedItems().scrollIntoView();
    return this;
  }

  clickAddToCartButtonForRecommendedItem() {
    cy.window().then((win) => {
      if (win.$) {
        win.$("#recommended-item-carousel").carousel("pause");
      }
    });
    cy.get("#recommended-item-carousel .add-to-cart:visible", {
      timeout: 10000,
    })
      .first()
      .click();
    return this.getRecommendedItemsSection().click();
  }

  clickViewCartLinkModal() {
    cy.get(".modal-content").within(() => {
      cy.get("a[href='/view_cart']").click({ force: true });
    });
  }

  scrollToBottom() {
    cy.scrollTo("bottom", { duration: 2000 });
    return this;
  }

  scrollToTopViaArrow() {
    this.getRifgtSideArrowToMoveUp().click();
    return this;
  }

  scrollToTop() {
    cy.scrollTo("top", { duration: 2000 });
    return this;
  }
}
export default HomePage;
