describe("About page", () => {
  it("Should have a container", () => {
    // Navigate to about page
    cy.visit("/about");
    // Get the container element
    cy.get(".about-container");
  });

  it("Should have an h1 element", () => {
    // Navigate to about page
    cy.visit("/about");
    // Get the h1 element
    cy.get(".about-header").contains("About page");
  });
});
