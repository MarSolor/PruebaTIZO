describe("Navegación por Catálogo de Detalle de Producto", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni");
        cerrarModal();
    });

    it("Validar navegación por catálogo de producto A", () => {
        navegarACatalogoMasVendido();
        verTodosLosProductosDeCategoria();
        aplicarFiltroMarcaAdidas();
        quitarFiltroMarcaAdidas();
        
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

    // Función para navegar al catálogo de lo más vendido
    function navegarACatalogoMasVendido() {
        cy.get(':nth-child(1) > .pr-5 > :nth-child(2) > .underline > b').click();
    }

    // Función para ver todos los productos de la categoría
    function verTodosLosProductosDeCategoria() {
        cy.get(':nth-child(2) > .pr-5 > :nth-child(2) > .underline').click();
    }

    // Función para aplicar el filtro de marca Adidas
    function aplicarFiltroMarcaAdidas() {
        cy.get('#Adidas').check();
    }

    // Función para quitar el filtro de marca Adidas
    function quitarFiltroMarcaAdidas() {
        cy.get('#Adidas').uncheck();
    }

});
