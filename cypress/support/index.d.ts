/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    buttonValidation(option: string): Chainable<any>;
    buttonClick(option: string): Chainable<any>;
    dropdownList(option: string): Chainable<any>;
    selectStartDate(option: string): Chainable<any>;
    selectEndDate(option: string): Chainable<any>;
    text(value: string): Chainable<any>;
  }
}
