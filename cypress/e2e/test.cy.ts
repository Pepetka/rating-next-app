describe("Check h1", () => {
  it("Right", () => {
    cy.visit("/");
    cy.get("h1").should("be.visible").and("have.text", "Home");
  });
  it("Visual", () => {
    cy.visit("/");
    cy.compareSnapshot("Home");
  });
});
