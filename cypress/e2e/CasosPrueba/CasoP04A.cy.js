describe("Test Suite - Navegación por Página de Inicio", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni");
        cerrarModal();
    });

    it("Validar navegación", () => {
        navegarPorCarruselDeAnuncios();
        navegarACategoriaNuevo();

        cy.screenshot();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

    // Función para cerrar el modal informativo
    function cerrarModal() {
        cy.get('#mat-mdc-dialog-title-0 > .mat-icon').click().wait(1000);
    }

    // Función para navegar por el carrusel de anuncios
    function navegarPorCarruselDeAnuncios() {
        cy.get('.slide > .absolute > :nth-child(3)').click().wait(1000);
        cy.get('.slide > .absolute > :nth-child(1)').click().wait(1000);
        cy.get('.slide > .absolute > :nth-child(5)').click().wait(1000);
    }

    // Función para navegar a la categoría "Nuevo"
    function navegarACategoriaNuevo() {
        cy.get(':nth-child(2) > .pr-5 > :nth-child(2) > .underline').click().wait(1000);
    }

});
