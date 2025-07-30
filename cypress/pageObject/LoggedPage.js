class LoggedPage {
  getUserLoggedIn = () => cy.contains("Logged in as Test");
}
export default LoggedPage;
