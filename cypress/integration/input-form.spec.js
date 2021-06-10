describe("Input form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("focuses input on load", () => {
    cy.focused().should("have.class", "new-todo");
  });

  it("accepts input", () => {
    const typedText = "Buy Groceries";

    cy.get(".new-todo").type(typedText).should("have.value", typedText);
  });

  context("Form submission", () => {
    it("Adds a new todo on submit", () => {
      const todoItemText = "Clean garage";

      // Stub out the backend API
      cy.server();
      cy.route("POST", "/api/todos", {
        name: todoItemText,
        id: 1,
        isCompleted: false,
      });
      cy.get(".new-todo")
        .type(todoItemText)
        .type("{enter}")
        .should("have.value", "");

      cy.get(".todo-list li")
        .should("have.length", 1)
        .and("contain", todoItemText);
    });

    it.only("Shows an error message on a failed submission", () => {
      // Stub API call
      cy.server();
      cy.route({
        url: "/api/todos",
        method: "POST",
        status: 500,
        response: {},
      });

      cy.get(".new-todo").type("test{enter}");

      cy.get(".todo-list li").should("not.exist");

      cy.get(".error").should("be.visible");
    });
  });
});
