describe('Amazon Search Functionality', () => {
    it('Search and checks results', () => {
        cy.visit('https://www.amazon.com');

        cy.get('div.nav-search-field > input#twotabsearchtextbox')
            .click()
            .type('chair');

        cy.get('input#nav-search-submit-button').click();

        cy.get('[data-component-type="s-search-results"]', { timeout: 10000 }).should('be.visible');

        cy.get('div[data-cy="title-recipe"] span')
            .not('.a-size-base')
            .not('.a-color-base')
            .should('contain.text', 'Chair');
    });
});

describe('Amazon Product Selection', () => {
    it('Checks product page options', () => {
        cy.visit('https://www.amazon.com/s?k=chair');

        cy.get('div[data-csa-c-content-id="s-search-see-details-button"] span.a-button.a-button-base[id^="a-autoid-"]')
            .should('exist')
            .then(($buttons) => {
                const randomIndex = Math.floor(Math.random() * $buttons.length);
                cy.wrap($buttons[randomIndex]).click();
            });

        cy.get('div#ppd', { timeout: 10000 }).should('be.visible');

        cy.get('ul.dimension-values-list[role="radiogroup"] li')
            .filter((index, el) => {
                return Cypress.$(el).find('span.a-button-inner').length > 0;
            })
            .should('exist');
    });
});

describe('Amazon search sort dropdown', () => {
    it('Selects a sort option from the dropdown', () => {
        cy.visit('https://www.amazon.com/s?k=chair');

        cy.get('[data-component-type="s-search-results"]', { timeout: 10000 }).should('be.visible');

        cy.get('span.a-dropdown-container').click();
        cy.get('a.a-dropdown-link').should('be.visible');

        cy.get('a#s-result-sort-select_1').click();
    });
});
