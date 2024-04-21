// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
beforeEach(() => {
  
    //  le code à l'intérieur du bloc beforeEach ne sera exécuté que si le nom de la spécification ne contient ni 'ForgetPassword' ni 'Register'
    if(!Cypress.spec.name.includes('RestMotPasse') && !Cypress.spec.name.includes('CreationCompte')){
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')   
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})
      cy.get('input[name="email"]').type('medamairi6@gmail.com')
      cy.get('input[name="password"]').type('abcd')
      cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('input[value="Login"]').click()
    }
  });
// Alternatively you can use CommonJS syntax:
// require('./commands')