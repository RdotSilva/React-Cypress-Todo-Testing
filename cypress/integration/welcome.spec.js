describe("About page", () => {
  beforeEach(() => {
    // Navigate to welcome page
    cy.visit("/welcome");
  });
  it("Should have a container", () => {
    // Get the container element using data-test-id
    cy.get('[data-testid="welcome-container]').should("exist");
  });

  it("Should have an h1 element", () => {
    it("Should have an h1 element", () => {
      // Get the h1 element
      cy.get('[data-testid="welcome-header]').should("exist");
    });
  });
});
