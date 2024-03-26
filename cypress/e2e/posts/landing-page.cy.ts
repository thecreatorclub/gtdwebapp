describe("Landing page", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.seed();
  });

  it("does not allow you to add posts when logged out", function () {
    cy.visit("/");
    cy.findByPlaceholderText("Title").should("not.exist");
  });

  it("allows you to add posts when logged int", function () {
    cy.login();
    cy.visit("/");
    cy.findByPlaceholderText("Title").should("exist");
  });
});
