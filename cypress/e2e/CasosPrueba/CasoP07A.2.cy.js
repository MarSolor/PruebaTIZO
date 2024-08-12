describe("Navegación por filtro busqueda de detalle de producto", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni");
        // Cerrar modal si está presente
        cy.get('#mat-mdc-dialog-title-0 > .mat-icon').click({ timeout: 10000 });
    });

    it("Búsqueda de producto y aplicación de filtros", () => {
        // Buscar producto escribiendo nombre
        cy.get('.mat-mdc-autocomplete-trigger').type("zapato");
        cy.get('.w-14').click();

        // Aplicar filtros
        cy.applyFilter('.fixed > :nth-child(3) > :nth-child(2) > :nth-child(2)'); // Filtro de días
        cy.applyFilter('.fixed > :nth-child(4) > :nth-child(2) > :nth-child(2)'); // Filtro de precio

        // Deseleccionar filtros
        cy.removeFilter(':nth-child(4) > :nth-child(2) > :nth-child(9)'); // Deseleccionar filtro de precio
        cy.removeFilter('.fixed > :nth-child(3) > :nth-child(2) > :nth-child(4)'); // Deseleccionar filtro de días

        cy.screenshot();
    });

    Cypress.on('uncaught:exception', (err) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

});

// Función personalizada para aplicar filtros
Cypress.Commands.add('applyFilter', (selector) => {
    cy.get(selector).click().should('be.visible');
});

// Función personalizada para eliminar filtros
Cypress.Commands.add('removeFilter', (selector) => {
    cy.get(selector).click()
});
