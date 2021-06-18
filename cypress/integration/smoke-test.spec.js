describe("Smoke tests", () => {
  context("With no todos", () => {
    it.only("Saves new todos", () => {
      cy.visit("/");
      cy.focused().type("Buy milk{enter}");

      cy.get(".todo-list li").should("have.length", 1);
    });
  });
});
