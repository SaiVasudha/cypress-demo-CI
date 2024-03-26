import {
  adminUserName,
  adminPassword,
  wrongUsername,
  wrongPassword,
} from "../constants/adminLoginData";

describe("Testing user Login", () => {
  beforeEach(() => {
    //visting the application
    cy.visit("https://dev2.contiplus.net/#/secure/dashboard/conveyors");
  });

  it("User Login with correct crendentials", () => {
    //user login  with correct email and password
    cy.findByLabelText("Email*").type(adminUserName);
    cy.get("input[type='password']").type(adminPassword);
    cy.findByRole("button", { name: "Login" }).click();

    //After login, it expects to find an alert box with a cookies accept button.
    cy.findByText("We value your privacy!").should("be.visible");
    cy.findByRole("button", { name: "Accept All" }).click();
  });

  it("User Login with wrong Credentials", () => {
    //user login with wrong email and password
    cy.findByLabelText("Email*").type(wrongUsername);
    cy.get("input[type='password']").type(wrongPassword);
    cy.findByRole("button", { name: "Login" }).click();

    // Verifies the visibility of the error message indicating invalid email/password.
    cy.findByText("Bad request: Invalid email/password").should("be.visible");
  });
});
