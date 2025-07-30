class CategoryProductsPage {
  getCategoryPageTitleWomen = () => cy.contains("Women - Dress Products");
  getCategoryPageTitleMen = () => cy.contains("Men - Tshirts Products");
}
export default CategoryProductsPage;
