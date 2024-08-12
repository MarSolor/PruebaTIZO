describe("Navegación por catálogo de detalle de producto", () =>{

    beforeEach(()=>{
        cy.visit("https://www.tizo.com.ni")
        //cerrar modal
        cy.get('#mat-mdc-dialog-title-0 > .mat-icon').click().wait(100)
    })

    it("Busqueda de producto", () => {
        //buscar producto escribiendo nombre
        cy.get('.mat-mdc-autocomplete-trigger').type("camisa").wait(100);
        // escribir seleccionar resultado de busqueda
        cy.get('#mat-option-0').click()
        
        //borrar campo de busqueda
        cy.get('.mat-mdc-autocomplete-trigger').clear().wait(300);
        //escribir nombre
        cy.get('.mat-mdc-autocomplete-trigger').clear().type("zapato").wait(100);
        //hacer clic en boton de buscar
        cy.get('.w-14').click().wait(100);
        
        cy.screenshot()

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

})