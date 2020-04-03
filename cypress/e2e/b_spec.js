describe('Basic test', function () {
    it('check finput', function () {
        cy.visit('/examples/vue/');
        cy.get('.new-todo').should('exist');
    });
});