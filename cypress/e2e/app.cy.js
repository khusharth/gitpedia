describe('app test', () => {
  it('first test', () => {
    cy.visit('http://localhost:3000');

    cy.get('.sc-fzpans').click();
  });
});

describe('app test 2', () => {
  it('2nd test', () => {
    cy.visit('http://localhost:3000');

    cy.findByPlaceholderText(/^Enter Github Username$/)
      .click()
      .type('khusharth');

    cy.findByLabelText('search').click();

    cy.findByRole('tab', { name: 'Timeline' }).click();
  });
});
