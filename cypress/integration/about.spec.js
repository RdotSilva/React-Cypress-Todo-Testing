describe("About page", () => {
  it("Should have a container", () => {
    // Navigate to about page
    cy.visit("/about");
    // Get the container element
    cy.get(".about-container");
  });
});
