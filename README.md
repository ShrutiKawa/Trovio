# E2E Testing with Cypress

This repository contains end-to-end (E2E) tests for the bank application using Cypress.

## Prerequisites

Before running the Cypress tests, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/): You can install Cypress as a development dependency using npm:

## Running Cypress Tests

Method 1: Interactive Mode (cypress open)

To run Cypress tests in interactive mode, follow these steps:

1. Open a terminal in your project's root directory.
2. Run the following command to open the Cypress Test Runner:<br>
   npm run cypress<br>
   Cypress Test Runner will open, allowing you to select and run individual test files or suites by clicking on them.

Observe the test execution in the Cypress Test Runner interface.

Method 2: Headless Mode (cypress run)
To run Cypress tests in headless mode, which is suitable for continuous integration (CI) environments or automated testing, follow these steps:

1. Open a terminal in your project's root directory.
2. Run the following command to execute all E2E tests:<br>
   npm run cypress:e2e<br>
   Cypress will execute all tests defined in the cypress/e2e directory.

Upon completion, Cypress will display the test results in the terminal.

## Additional Information
This project uses Cypress Mochawesome Reporter for generating HTML reports.

To generate and merge Mochawesome HTML reports, you can use the provided scripts:<br>
<br>
npm run merge-reports: Merges multiple Mochawesome JSON reports into a single file.<br>
npm run generate-report: Generates an HTML report from the merged JSON report.
