const filename = "cypress/fixtures/customerDetails.json";
describe("XYZ Bank - Customer", { testIsolation: false }, () => {
  it("Customer Login", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.url({ timeout: 1000 }).should("match", /\/login$/); // timeout will wait maximum 1 second before considering it a failure
    // Validation of login page
    cy.contains("XYZ Bank").should("be.visible"); // Validates Heading
    cy.buttonValidation("Home"); // Validate Home Button
    cy.buttonValidation("Customer Login"); // Validate Customer Login Button
    cy.buttonValidation("Bank Manager Login"); // Validate Banak Manager Login Button

    cy.buttonClick("Customer Login"); // Clicks Customer Login Button
    cy.url({ timeout: 1000 }).should("match", /\/customer$/); // Validate Url

    cy.dropdownList("Hermoine Granger"); // Selects 1st Customer from the list
    cy.buttonClick("Login"); // Clicks Login Button
    cy.url({ timeout: 1000 }).should("match", /\/account$/); // Validate Url
  });

  it("Validate Customer Transaction", () => {
    cy.dropdownList("1001"); // Selects 2nd option from the list
    // Get the Account Number, Balance, and Currency values
    cy.get(".center")
      .eq(0)
      .within(() => {
        cy.get("strong.ng-binding").then(($elements) => {
          const accountNumber = $elements[0].textContent;
          const balance = $elements[1].textContent;
          const currency = $elements[2].textContent;

          // Create an object with the extracted values
          const dataToWrite = {
            accountNumber,
            balance,
            currency,
          };

          // Write the data to the fixture.json file
          cy.writeFile(filename, dataToWrite);
        });
      });

    // Validates Transaction
    cy.buttonClick("Transactions");
    cy.url({ timeout: 1000 }).should("match", /\/listTx$/); // Validate Url

    cy.selectStartDate("01/05/2015, 8.30");
    cy.selectEndDate("02/05/2015, 14.30");

    cy.get("table.table").within(() => {
      // Select all table rows within the tbody
      cy.get("tbody > tr.ng-scope").each(($row, index) => {
        // Extract data from each row
        cy.wrap($row).within(() => {
          // Extract values from the current row
          cy.get("td").eq(0).invoke("text").as("dateTime");
          cy.get("td").eq(1).invoke("text").as("amount");
          cy.get("td").eq(2).invoke("text").as("transactionType");
        });

        // Use the extracted values for validation based on the row index
        cy.get("@dateTime").then((dateTime) => {
          if (index === 0) {
            expect(dateTime).to.equal("May 2, 2015 12:00:00 AM");
          } else if (index === 1) {
            expect(dateTime).to.equal("May 2, 2015 12:00:00 AM");
          }
        });

        cy.get("@amount").then((amount) => {
          if (index === 0) {
            expect(amount).to.equal("30");
          } else if (index === 1) {
            expect(amount).to.equal("4");
          }
        });

        cy.get("@transactionType").then((transactionType) => {
          if (index === 0) {
            expect(transactionType).to.equal("Credit");
          } else if (index === 1) {
            expect(transactionType).to.equal("Debit");
          }
        });
        cy.wait(500); // waits for half second
      });
    });

    cy.buttonClick("Back");
    cy.url({ timeout: 1000 }).should("match", /\/account$/); // Validate Url
  });

  it("Performes Deposite", () => {
    // Handles Deposit Flow
    cy.buttonClick("Deposit");
    cy.text("50");
    cy.get("form.ng-dirty > .btn").click(); // Click deposit button
    cy.contains("Deposit Successful").should("be.visible").wait(1000); // Validates Message
  });

  it("Performes Withdrawal", () => {
    // Handles Withdrawal Flow
    cy.buttonClick("Withdrawl").wait(2000);
    cy.text("10");
    cy.get("form.ng-dirty > .btn").click(); // Click withdraw button
    cy.contains("Transaction successful").should("be.visible").wait(1000); // Validates Message

    cy.buttonClick("Logout");
    cy.url({ timeout: 1000 }).should("match", /\/customer$/); // Validate Url
  });
});
