
describe("Test Suite - Inicio de Sesión B", () => {

    beforeEach(() => {
        cy.visit("https://www.tizo.com.ni/signin");
    });

    it("Ingresar a login", () => {
        // Ingresar las credenciales de usuario
        ingresarCredenciales("86147027", "Mario1234.");

        // Intentar hacer clic en el botón de iniciar sesión, manejando posibles problemas de visibilidad o captura
        intentarHacerClicBotonIngresar();

        // Capturar la pantalla después de intentar iniciar sesión
        cy.screenshot();
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que Cypress falle la prueba
        return false;
    });

    // Función para ingresar credenciales
    function ingresarCredenciales(telefono, contrasena) {
        cy.get('.rounded-r-sm').type(telefono);
        cy.get('#pass').type(contrasena).wait(100);
        cy.get('.rounded > :nth-child(3)').click().wait(100);
    }

    // Función para manejar el clic en el botón de iniciar sesión
    //el boton no es detectado
    function intentarHacerClicBotonIngresar() {
        const botonIngresarSelector = '.w-[40%].bg-[#1CE783] > b';
        
        cy.get(botonIngresarSelector)
            .should('be.visible')
            .scrollIntoView()
            .click({ force: true })
            .wait(100);
    }

});
