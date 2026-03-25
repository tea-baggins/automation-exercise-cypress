# <img src="https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-dark.png" height="32" style="vertical-align: middle"> Automation Exercise Cypress

<p align="center">
  <a href="https://github.com/tea-baggins/automation-exercise-cypress/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/tea-baggins/automation-exercise-cypress/main.yml?branch=main&label=Cypress%20Tests&style=for-the-badge&logo=cypress&logoColor=white&color=17202C" alt="Cypress Tests">
  </a>
  <a href="https://tea-baggins.github.io/automation-exercise-cypress/">
    <img src="https://img.shields.io/badge/Cypress%20Report-View%20Here-04C38E?style=for-the-badge&logo=cypress&logoColor=white&color=04C38E" alt="Cypress Report">
  </a>
</p>

<p align="center">
  <img src="https://www.automationexercise.com/static/images/home/logo.png" alt="Website for practice automation" width="350" />
</p>

AutomationExercise is a public e-commerce demo site created for QA engineers to practice automation and API testing at any level, from beginner to advanced. This framework provides automated UI test coverage for the site's core features.

## 🚀 Features

* **Comprehensive E2E Coverage:** Automated UI tests for registration, login, product search, cart management, and checkout.
* **Design Pattern:** Clean **Page Object Model (POM)** architecture for high maintainability and scalability.
* **Advanced Validations:** Includes verification of UI elements, dynamic cart calculations, and file downloads.
* **Test Isolation:** Global cleanup logic ensures a consistent and clean starting state before every test.

## 📁 Project Structure

* `cypress/e2e/` — Cypress test specifications.
* `cypress/pageObject/` — Page Object classes for UI components and methods.
* `cypress/fixtures/` — Test data files (JSON).
* `cypress/support/` — Custom Cypress commands and reusable utilities.
* `cypress.config.js` — Cypress configuration file.

## 📚 Prerequisites

* **Chrome browser** (or any Chromium-based browser).
* **Node.js** version 18 or higher.
* **npm** (comes bundled with Node.js).
* **VS Code** or any preferred code editor.
* **Cypress** (installed automatically via npm).

## 💻 How to Run

1. Clone the repository  
   `git clone https://github.com/tea-baggins/automation-exercise-cypress`
2. Open VSCode and navigate to project folder  
   `cd automation-exercise-cypress`
3. Install dependencies  
   `npm install`
4. Run Cypress interactive runner  
   `npm run cy:open`
5. To run all tests headlessly (CLI)  
   `npm test`

_Note:_ Global cleanup runs before each test to reset the testing environment.

## 🔄 Continuous Integration (CI)

This project uses **GitHub Actions** to ensure code quality and prevent regressions.

* **Automated Triggers:** Tests run automatically on every `push` and `pull_request` to the main branch.
* **Headless Execution:** CI environment executes tests in a headless Chrome browser for optimal performance.
* **Workflow Status:** You can monitor the real-time status of the pipeline via the **Actions** tab or the status badge at the top of this page.

## 📊 Reporting

This project uses **Mochawesome** to generate clean, lightweight, and interactive test reports.

* **Live Report:** Hosted on GitHub Pages. [View the latest report here](https://tea-baggins.github.io/automation-exercise-cypress/).
* **Key Features:**
    * **Visual Summary:** High-level overview of total tests, passes, and failures.
    * **Detailed Logs:** Step-by-step execution details and error messages for failed tests.
    * **Performance Metrics:** Real-time tracking of test duration to monitor suite performance.
* **CI Integration:** Reports are automatically merged and deployed to the web after every run in GitHub Actions.

## 🧑‍💻 Project Coding Convention

- Page Object files: PascalCase (e.g., `Header.js`, `LoginPage.js`)
- Test files: PascalCase with `.cy.js` extension (e.g., `AddProductsInCartPage.cy.js`)
- Use descriptive names for `describe` blocks (feature or scenario) and `it` blocks (test case), e.g., `TC_11 | Verify add products in cart`

### Spec Structure Example

example:

```javascript
describe("Add Products in Cart", () => {
  it("TC_11 | Verify add products in cart", () => {
    // test steps here
  });
});
```

## 🛠 Best Practices Followed

* **Atomic Commits:** Only test-related files are committed; build artifacts, screenshots, and logs are strictly ignored via `.gitignore`.
* **Standardized Configuration:** Core configuration files are maintained to ensure environment consistency across different machines and CI/CD pipelines.
* **No Hardcoded Data:** All test data is managed via **Cypress Fixtures** (JSON), ensuring test flexibility and easy data updates.
* **Page Object Model (POM):** UI elements and action methods are separated from test logic to reduce code duplication and simplify maintenance.

## 📝 License

This project is open-source and intended for educational purposes.

---

Practice your automation skills at: [https://www.automationexercise.com](https://www.automationexercise.com)
