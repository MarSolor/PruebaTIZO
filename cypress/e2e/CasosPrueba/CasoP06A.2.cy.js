describe("Navegación por filtros de catalogo", () => {

    beforeEach(() => {
        // Visitar el sitio web y cerrar el modal inicial
        cy.visit("https://www.tizo.com.ni");
        cerrarModal();
    });

    it("Filtro de catálogo de productos", () => {
        // Navegar al catálogo de lo más vendido
        cy.get(':nth-child(1) > .pr-5 > :nth-child(2) > .underline > b').click().wait(100);

        // Aplicar filtros de precios
        aplicarFiltroPrecio('menor');
        aplicarFiltroPrecio('mayor');

        // Reiniciar filtro de precios
        reiniciarFiltroPrecio();

        // Capturar la pantalla
        cy.screenshot();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

    // Función para cerrar el modal inicial
    function cerrarModal() {
        cy.get('#mat-mdc-dialog-title-0 > .mat-icon').click().wait(100);
    }

    // Función para aplicar filtro de precio
    function aplicarFiltroPrecio(tipo) {
        cy.get('.justify-end > .mat-mdc-menu-trigger').click().wait(100);
        if (tipo === 'menor') {
            cy.get('.mat-mdc-menu-content > :nth-child(2)').click().wait(100);
        } else if (tipo === 'mayor') {
            cy.get('.mat-mdc-menu-content > :nth-child(1)').click().wait(100);
        }
    }

    // Función para reiniciar el filtro de precios
    function reiniciarFiltroPrecio() {
        cy.get('.justify-end > .mat-mdc-menu-trigger').click().wait(100);
        cy.get('.mat-mdc-menu-content > :nth-child(3)').click().wait(100);
    }

});
