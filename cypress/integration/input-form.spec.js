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
    it.only("Adds a new todo on submit", () => {
      
      // Stub out the backend API
      cy.server();
      cy.route("POST", "/api/todos", {
        name: "Clean garage",
        id: 1,
        isCompleted: false,
      });
      cy.get(".new-todo").type("Clean garage").type("{enter}");
    });
  });
});
