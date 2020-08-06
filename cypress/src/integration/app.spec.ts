export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should open to the Do tab', () => {
    cy.url().should('contain', 'do');
    cy.contains('.btn', 'Acknowledge All').should('not.exist');
  });
  it('should acknowledge employees and positions on Do tab', () => {
    cy.get('i:contains(check_box_outline_blank)').each(checkBox => {
      cy.wrap(checkBox).click();
    });
    cy.get('work-task-list .collection')
      .children()
      .should('have.length', 6);
    cy.get('home-task-list .collection')
      .children()
      .should('have.length', 6);
  });
  it("should navigate to Don't tab, and click acknowledge all", () => {
    cy.contains("Don't").click();
    cy.contains('.btn', 'Complete All').click();
    cy.get('work-task-list  .collection')
      .children()
      .should('have.length', 6);
    cy.get('home-task-list  .collection')
      .children()
      .should('have.length', 6);
  });
});
