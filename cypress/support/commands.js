Cypress.Commands.add("seedAndVisit", () => {
  // STUB API call and populate list of todos
  cy.server();
  cy.route("GET", "/api/todos", "fixture:todos");
  cy.visit("/");
});
