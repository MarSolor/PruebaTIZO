1. Instalar Cypress
   
npm init -y

npm install cypress --save-dev


3. Visualizar Casos de Prueba en Formato de Video:

Para abrir el asistente de Cypress y visualizar los casos de prueba en formato de video, utiliza el siguiente comando:

npx cypress open
3. Ejecutar Pruebas Rápidamente por Consola en Diferentes Navegadores:

Para ejecutar las pruebas de los casos de uso y ver los resultados en la consola en diferentes navegadores, utiliza uno de los siguientes comandos:

npx cypress run --spec cypress/e2e/CasosPrueba/Todos.cy.js --browser chrome

npx cypress run --spec cypress/e2e/CasosPrueba/Todos.cy.js --browser firefox

npx cypress run --spec cypress/e2e/CasosPrueba/Todos.cy.js --browser edge
