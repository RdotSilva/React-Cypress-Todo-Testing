describe("Smoke tests", () => {
  // Clear out the Todos to start fresh
  beforeEach(() => {
    cy.request("GET", "/api/todos")
      .its("body")
      .each((todo) => cy.request("DELETE", `/api/todos/${todo.id}`));
  });

  context("With no todos", () => {
    it("Saves new todos", () => {
      // List of todo items we will except to see
      const items = [
        { text: "Buy milk", expectedLength: 1 },
        { text: "Buy eggs", expectedLength: 2 },
        { text: "Buy bread", expectedLength: 3 },
      ];

      cy.visit("/");
      cy.server();
      cy.route("POST", "/api/todos").as("create");

      cy.wrap(items).each((todo) => {
        cy.focused().type(todo.text).type("{enter}");

        cy.wait("@create");

        cy.get(".todo-list li").should("have.length", todo.expectedLength);
      });
    });
  });
  context("With active totos", () => {
    cy.visit("/");

    it.only("Loads existing data from the database", () => {
      cy.get(".todo-list li").should("have.length", 4);
    });
  });
});
