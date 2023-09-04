/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("buttonValidation", (option) => {
  cy.get("button").contains(option).should("be.visible");
});

Cypress.Commands.add("buttonClick", (option) => {
  cy.get("button").contains(option).click();
});

Cypress.Commands.add("dropdownList", (option) => {
  cy.get("select").select(option);
});

Cypress.Commands.add("selectStartDate", (dateTime) => {
  const [datePart, timePart] = dateTime.split(", "); // Split string into date and time
  const [day, month, year] = datePart.split("/"); // Split the date into day, month, and year
  const [hours, minutes] = timePart.split("."); // Split the time into hours and minutes
  const formattedDateTime = `${year}-${month}-${day}T${hours.padStart(
    2,
    "0"
  )}:${minutes.padStart(2, "0")}`;
  cy.get("#start").clear().type(formattedDateTime);
});

Cypress.Commands.add("selectEndDate", (dateTime) => {
  const [datePart, timePart] = dateTime.split(", ");
  const [day, month, year] = datePart.split("/");
  const [hours, minutes] = timePart.split(".");
  const formattedDateTime = `${year}-${month}-${day}T${hours.padStart(
    2,
    "0"
  )}:${minutes.padStart(2, "0")}`;
  cy.get("#end").clear().type(formattedDateTime);
});

Cypress.Commands.add("text", (value) => {
  cy.get("input").type(value);
});
