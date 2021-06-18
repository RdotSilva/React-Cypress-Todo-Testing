describe("Smoke tests", () => {
  // Clear out the Todos to start fresh
  beforeEach(() => {
    cy.request("GET", "/api/todos")
      .its("body")
      .each((todo) => cy.request("DELETE", `/api/todos/${todo.id}`));
  });

  context("With no todos", () => {
    it.only("Saves new todos", () => {
      cy.visit("/");
      cy.focused().type("Buy milk{enter}");

      cy.get(".todo-list li").should("have.length", 1);
    });
  });
});
