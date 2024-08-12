describe("Test Suite - Inicio de Sesión A", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni/signin");
    });

    it("Olvidé mi contraseña", () => {
        // Iniciar el flujo de recuperación de contraseña
        iniciarRecuperacionContrasena("86147027");

        // Ingresar el código de verificación y establecer nueva contraseña
        ingresarCodigoVerificacion("0908");
        establecerNuevaContrasena("Mario123.");

        // Capturar la pantalla
        cy.screenshot();
    });

    Cypress.on('uncaught:exception', (err) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

    // Función para iniciar el flujo de recuperación de contraseña
    function iniciarRecuperacionContrasena(telefono) {
        cy.get(':nth-child(4) > .text-sm').click();
        cy.get('.text-sm').type(telefono);
        cy.get(':nth-child(4) > .w-full').click();
    }

    // Función para ingresar el código de verificación recibido
    function ingresarCodigoVerificacion(codigo) {
        cy.get('.relative.mt-5 > #pass').type(codigo);
        cy.get('.flex-row > .w-full').click(); // Hacer clic para verificar el código
    }

    // Función para establecer una nueva contraseña
    function establecerNuevaContrasena(nuevaContrasena) {
        cy.get(':nth-child(2) > #pass').type(nuevaContrasena);
        cy.get('#pass1').type(nuevaContrasena);
        cy.get('.flex-row > .w-full').click();
    }

});
