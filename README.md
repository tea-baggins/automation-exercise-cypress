# Automation Exercise Cypress 2025

<p align="center">
  <img src="https://www.automationexercise.com/static/images/home/logo.png" alt="Website for practice automation" width="350" />
</p>

AutomationExercise is a public e-commerce demo site created for QA engineers to practice automation and API testing at any level, from beginner to advanced. This framework provides automated UI test coverage for the site's core features.

## 🚀 Features

- Automated UI tests for registration, login, product search, cart management, and checkout.
- Clean Page Object Model architecture for easy maintenance.
- Tests include validation of UI elements, cart price, file downloads, etc.
- Global cleanup ensures a consistent starting state before tests.

## 📁 Project Structure

- `/e2e/` — Cypress test specs.
- `/pageObject/` — Page Object classes for UI components and methods.
- `/fixtures/` — Test data files (JSON).
- `/support/` — Custom Cypress commands and reusable utilities.
- `cypress.config.js` — Cypress configuration file.

## 📚 Prerequisites

- Chrome browser
- Node.js version 18 or higher ([download](https://nodejs.org/en/download))
- npm (comes bundled with Node.js)
- VSCode or any code editor
- Cypress (installed automatically via npm)

## ⚙ How to Run

1. Clone the repository  
   `git clone https://github.com/your-username/automationexercise-cypress.git`
2. Open VSCode and navigate to project folder  
   `cd Cypress_Automation_Exercise_2025`
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

## 📜 MUST-FOLLOW RULES

- Do not install any new libraries, plugins, or tools without approval.
- Do not modify existing configuration files (`cypress.config.js`, `package.json`, etc.) unless instructed.
- Focus changes on test scripts and test-related assets only.
- Commit only test-related files; do not commit build files, lock files, or config files unless necessary.

**Do not push changes to these files:**

- `README.md`
- `package.json`
- `package-lock.json`
- `cypress.config.js`
- `.gitignore`
- `e2e.js`
- Any other non-test-related files

## 📝 License

This project is open-source and intended for educational purposes.

---

Practice your automation skills at: [https://www.automationexercise.com](https://www.automationexercise.com)
