describe("About page", () => {
  it("Should have a container", () => {
    // Navigate to about page
    cy.visit("/welcome");
    // Get the container element using data-test-id
    cy.get('[data-testid="welcome-container]').click();
  });
});
