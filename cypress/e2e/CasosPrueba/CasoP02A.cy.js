describe("Test Suite - Registro de Usuarios", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni/create-account");
    });

    it("Registro de usuario", () => {
        // Completar el formulario de registro
        completarRegistroUsuario({
            nombre: "Mario Ortega",
            email: "msamtiagoortega@hotmail.com",
            telefono: "89097751",
            contrasena: "Mario123."
        });

        // Ingresar el token de verificación
        ingresarTokenVerificacion("4146");

        // Finalizar registro
        cy.get(':nth-child(2) > .w-full').click();

        // Capturar la pantalla
        cy.screenshot();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

    // Función para completar el formulario de registro
    function completarRegistroUsuario({ nombre, email, telefono, contrasena }) {
        cy.get('.relative.my-5 > #pass').type(nombre).wait(100);
        cy.get(':nth-child(2) > .overflow-hidden > #pass').type(email).wait(100);
        cy.get(':nth-child(2) > :nth-child(3) > .text-sm').type(telefono).wait(100);
        cy.get('.mt-5.rounded > #pass').type(contrasena).wait(100);
        cy.get(':nth-child(4) > .w-full').click();
    }

    // Función para ingresar el token de verificación
    function ingresarTokenVerificacion(token) {
        const tokenArray = token.split('');
        cy.get('[formcontrolname="first"]').type(tokenArray[0]).wait(100);
        cy.get('[formcontrolname="second"]').type(tokenArray[1]).wait(100);
        cy.get('[formcontrolname="third"]').type(tokenArray[2]).wait(100);
        cy.get('[formcontrolname="fourth"]').type(tokenArray[3]).wait(100);
    }

});
