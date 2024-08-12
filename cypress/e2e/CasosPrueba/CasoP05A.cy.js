describe("Test Suite - Navegación por Catálogo de Tiendas Asociadas", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni");
        cerrarModal();
    });

    it("Validar navegación por catálogo de tiendas", () => {
        navegarATiendasMasCotizadas();
        navegarATiendaDelCatalogo();
        
        cy.screenshot();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

    // Función para cerrar el modal informativo
    function cerrarModal() {
        cy.get('#mat-mdc-dialog-title-0 > .mat-icon').click();
    }

    // Función para navegar a las tiendas más cotizadas y luego salir
    function navegarATiendasMasCotizadas() {
        cy.get(':nth-child(3) > .justify-between > :nth-child(2) > .underline > b')
            .click();
        cy.get('.px-5 > .mat-icon').click();
        cy.get(':nth-child(3) > .justify-between > :nth-child(2) > .underline > b')
            .click();
    }

    // Función para navegar a una tienda del catálogo
    function navegarATiendaDelCatalogo() {
        cy.get(':nth-child(3) > .bg-white > .px-4 > .text-bold')
            .click();
    }
});
