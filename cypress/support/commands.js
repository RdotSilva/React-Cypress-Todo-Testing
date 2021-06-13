Cypress.Commands.add("seedAndVisit", (seedData = "fixture:todo") => {
  // STUB API call and populate list of todos
  cy.server();
  cy.route("GET", "/api/todos", seedData);
  cy.visit("/");
});
