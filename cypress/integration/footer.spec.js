describe("Footer", () => {
  context("with a single todo", () => {
    it("displays a singular todo in count", () => {
      cy.seedAndVisit([{ id: 1, name: "Buy milk", isComplete: false }]);
      cy.get(".todo-count").should("contain", "1 todo left");
    });
  });

  context("with multiple todos", () => {
    beforeEach(() => {
      cy.seedAndVisit();
    });

    it("displays plural todos in count", () => {
      cy.get(".todo-count").should("contain", "3 todos left");
    });

    it("Filters to activate todos", () => {
      cy.contains("Active").click();

      cy.get(".todo-list li").should("have.length", 3);
    });

    it("Filters to completed todos", () => {
      cy.contains("Completed").click();

      cy.get(".todo-list li").should("have.length", 1);
    });

    it.only("Filters to all todos", () => {
      cy.contains("All").click();

      cy.get(".todo-list li").should("have.length", 4);
    });
  });
});
