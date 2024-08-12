describe("Test Suite - Inicio de Sesión A", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni/signin");
    });

    it("Olvidé mi contraseña", () => {
        // Iniciar el flujo de recuperación de contraseña
        iniciarRecuperacionContrasena("86147027");

        // Ingresar el nuevo código de verificación y establecer nueva contraseña
        establecerNuevaContrasena("0962", "Mario123.");

        // Capturar la pantalla
        cy.screenshot();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

    // Función para iniciar el flujo de recuperación de contraseña
    function iniciarRecuperacionContrasena(telefono) {
        cy.get(':nth-child(4) > .text-sm')
            .click()
            .wait(100);
        cy.get('.text-sm')
            .type(telefono)
            .wait(100);
        cy.get(':nth-child(4) > .w-full')
            .click()
            .wait(100);
    }

    // Función para establecer una nueva contraseña
    function establecerNuevaContrasena(codigoVerificacion, nuevaContrasena) {
        cy.get('.relative.mt-5 > #pass')
            .type(nuevaContrasena)
            .wait(100);
        cy.get(':nth-child(2) > #pass')
            .type(nuevaContrasena)
            .wait(100);
        cy.get('#pass1')
            .type(nuevaContrasena)
            .wait(100);
        cy.get('.flex-row > .w-full')
            .click()
            .wait(1000);
    }

});

