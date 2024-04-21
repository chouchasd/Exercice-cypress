describe('Acheter un produit ', () => {
  // déclarer les variables golbales 
   var email;    var password;  var firstname;  var lastname;
  // Initialiser ces variables avec vos valeurs spécifique
  before(() => {
    email = 'shaymasdiri368@gmail.com';
    password = 'abcd123';
    firstname = 'chaima';
    lastname = 'sdiri';
  });

  // Test cases pour l'ajout des produits au panier
 /* it('Acheter un produit au panier', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
      cy.get('button[type="submit"]').contains("Search").click({force:true})   
      cy.contains("Search - HTC Touch HD")
      cy.get('#entry_212469 > .row > :nth-child(1)').click()
      // Completez le test d'achat d'un produit 
      cy.get('button[title="Buy now"]').contains('Buy now').click({force:true})
      cy.get(':nth-child(6) > .custom-control-label').click()
      cy.get('button[id="button-save"]').click()
      cy.contains('Confirm Order')
      cy.get('button[id="button-confirm"]').click()
      cy.contains('Your order has been placed!')
      
  }); */
    //Ajoutez autres tests cases pour l'achat des produits 
    
    it('Acheter un produit en utilisant une autre adresse non existante ', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
      cy.get('button[type="submit"]').contains("Search").click({force:true})   
      cy.contains("Search - HTC Touch HD")
      cy.get('#entry_212469 > .row > :nth-child(1)').click()
      cy.get('button[title="Buy now"]').contains('Buy now').click({force:true})  
      cy.get('label[for="input-payment-address-new"]').click()
      cy.get('input[name="firstname"]').type(firstname)
      cy.get('input[name="lastname"]').type(lastname)
      cy.get('input[name="address_1"]').type('Centre urbain')
      cy.get('input[name="city"]').type('Tunis')
      cy.get('input[name="postcode"]').type('1003')
      cy.get('select[name="country_id"]').select('Tunisia')
      cy.get('select[name="zone_id"]').select('Tunis')
      cy.get(':nth-child(6) > .custom-control-label').click()
      cy.get('button[id="button-save"]').click()
      cy.contains('Confirm Order')
      cy.get('button[id="button-confirm"]').click()
      cy.contains('Your order has been placed!')
    });
  });
  