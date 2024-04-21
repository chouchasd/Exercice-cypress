describe('Création de compte', () => {

  // déclarer les variables golbales 
  var firstname;  var lastname; var email;  var tel;  var password; var email1

  // Initialiser ces variables avec vos valeurs spécifique
  before(() => {
    firstname = 'chaima';
    lastname = 'sdiri';
    email = 'shaymasdiri368@gmail.com';
    tel = '95641288';
    password = 'abcd123';
    email1= 'chaimasdiri2@test.fr';
  });

  // Actions à effectuer avant chaque cas de test
  beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
    cy.title().should('eq', 'Your Store')
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').contains("Continue").click({force:true})
    
  })

  // les cas des tests 
  it('Creation de nouveau compte avec succée', () => {
    cy.get('input[name="firstname"]').type(firstname)
    cy.get('input[name="lastname"]').type(lastname)
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="telephone"]').type(tel)
    cy.get('input[name="password"]').type(password)
    cy.get('input[name="confirm"]').type(password)
    cy.get('input[id="input-newsletter-yes"]').click({force:true})
    cy.get('input[name="agree"]').click({force:true})
    cy.get('input[value="Continue"]').click({force:true})
    cy.contains("Congratulations! Your new account has been successfully created!")
  });

  //Ajoutez autres test cases pour la partie creation du compte
  
  it('Création de compte avec un email déjà utilisé', () => {
    cy.get('input[name="firstname"]').type(firstname)
    cy.get('input[name="lastname"]').type(lastname)
    cy.get('input[name="email"]').type(email1) 
    cy.get('input[name="telephone"]').type(tel)
    cy.get('input[name="password"]').type(password)
    cy.get('input[name="confirm"]').type(password)
    cy.get('input[id="input-newsletter-yes"]').click({force:true}) 
    cy.get('input[name="agree"]').click({force:true})
    cy.get('input[value="Continue"]').click({force:true})
    cy.contains("Warning: E-Mail Address is already registered!")
  });
  it('Création de compte sans accepter les conditions', () => {
    cy.get('input[name="firstname"]').type(firstname)
    cy.get('input[name="lastname"]').type(lastname)
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="telephone"]').type(tel)
    cy.get('input[name="password"]').type(password)
    cy.get('input[name="confirm"]').type(password)
    cy.get('input[id="input-newsletter-yes"]').click({force:true})
    cy.get('input[value="Continue"]').click({force:true})
    cy.contains("Warning: You must agree to the Privacy Policy!")
  });
  it('Création de compte sans remplir le champs téléphone', () => {
    cy.get('input[name="firstname"]').type(firstname)
    cy.get('input[name="lastname"]').type(lastname)
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('input[name="confirm"]').type(password)
    cy.get('input[id="input-newsletter-yes"]').click({force:true})
    cy.get('input[name="agree"]').click({force:true})
    cy.get('input[value="Continue"]').click({force:true})
    cy.contains("Telephone must be between 3 and 32 characters!")
  });
  
});