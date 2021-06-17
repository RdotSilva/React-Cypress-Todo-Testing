describe("Footer", () => {
  context("with a single todo", () => {
    it("displays a singular todo in count", () => {
      cy.seedAndVisit([{ id: 1, name: "Buy milk", isComplete: false }]);
      cy.get(".todo-count").should("contain", "1 todo left");
    });
  });

  context("with multiple todos", () => {
    it("displays plural todos in count", () => {
      beforeEach(() => {
        cy.seedAndVisit();
      });

      cy.get(".todo-count").should("contain", "3 todos left");
    });

    it.only("Filters to activate todos", () => {
      cy.contains("Active").click();

      cy.get(".todo-list li").should("have.length", 3);
    });
  });
});