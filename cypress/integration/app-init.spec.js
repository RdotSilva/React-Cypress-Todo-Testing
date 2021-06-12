describe("App initialization", () => {
  it.only("Loads todos on page load", () => {
    // STUB API call and populate list of todos
    cy.server();
    cy.route("GET", "/api/todos", "fixture:todos");
    cy.visit("/");

    cy.get(".todo-list li").should("have.length", 4);
  });
});
