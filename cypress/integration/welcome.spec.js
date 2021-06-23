describe("About page", () => {
  it("Should have a container", () => {
    // Navigate to welcome page
    cy.visit("/welcome");
    // Get the container element using data-test-id
    cy.get('[data-testid="welcome-container]').should("exist");
  });

  it("Should have an h1 element", () => {
    it("Should have an h1 element", () => {
      // Navigate to welcome page
      cy.visit("/welcome");
      // Get the h1 element
      cy.get('[data-testid="welcome-header]').should("exist");
    });
  });
});
