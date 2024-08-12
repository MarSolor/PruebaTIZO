describe("Test Suite - Modal Informativo en Página de Inicio", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni");
    });

    it("Validar Visualización de Elementos", () => {
        
        cy.get('#mat-mdc-dialog-title-0', { timeout: 10000 }) // Esperar hasta 10 segundos para que el título esté visible
            .should('be.visible');

        cy.get('.mat-mdc-dialog-content', { timeout: 10000 }) // Esperar hasta 10 segundos para que el contenido esté visible
            .should('be.visible');

        // Validar que el título h1 contenga el texto esperado
        cy.get('h1').should('contain.text', "Sos de los primeros en probar tizo mercado");

        // Validar que el video (iframe) sea visible
        cy.get('iframe', { timeout: 10000 }) // Esperar hasta 10 segundos para que el iframe esté disponible
            .should('be.visible');

        // Validar que el ícono del botón sea visible
        cy.get('.md\\:w-4', { timeout: 10000 }) // Esperar hasta 10 segundos para que el ícono esté visible
            .should('be.visible');

        // Cerrar el modal
        cy.get('#mat-mdc-dialog-title-0 > .mat-icon', { timeout: 10000 }) // Esperar hasta 10 segundos para que el ícono esté visible
            .should('be.visible')
            .click();

        // Capturar pantalla después de cerrar el modal
        cy.screenshot('modal_cerrado');
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que Cypress falle la prueba en caso de excepciones no manejadas
        return false;
    });

});
