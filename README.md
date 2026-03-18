# Automation Exercise Cypress 2025

![End-to-end tests](https://github.com/tea-baggins/automation-exercise-cypress/actions/workflows/main.yml/badge.svg)

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

## ⚙ How to Run

1. Clone the repository  
   `git clone https://github.com/tea-baggins/automation-exercise-cypress`
2. Open VSCode and navigate to project folder  
   `cd automation-exercise-cypress`
3. Install dependencies  
   `npm install`
4. Run Cypress interactive runner  
   `npx cypress open`
5. To run all tests headlessly (CLI)  
   `npx cypress run`

_Note:_ Global cleanup runs before each test to reset the testing environment.

## 🧑‍💻 Project Coding Convention

- Page Object files: PascalCase (e.g., `Header.js`, `LoginPage.js`)
- Test files: PascalCase with `.cy.js` extension (e.g., `AddProductsInCartPage.cy.js`)
- Use descriptive names for `describe` blocks (feature or scenario) and `it` blocks (test case), e.g., `TC_11 | Verify add products in cart`

### Spec Structure Example

example:

```
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
