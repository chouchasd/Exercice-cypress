describe('Mot de pass oublié', () => {
  // Test cases pour la forget password
  it('Reset mot de pass avec succée', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
      cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
      cy.contains("Forgot Your Password?")
      cy.get('input[name="email"]').type("med@test.com")
      cy.get('button[type="submit"]').contains('Continue').click()
      cy.contains(' An email with a confirmation link has been sent your email address.')
    })  
  
  //Ajoutez autres test cases pour la partie forget password
    
  it('Réinitialisation du mot de passe avec email non enregistré', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
      cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
      cy.contains("Forgot Your Password?")
      cy.get('input[name="email"]').type("email@nonenregistre.com")
      cy.get('button[type="submit"]').contains('Continue').click()
      cy.contains('The E-Mail Address was not found in our records, please try again!')
    });

  it('Réinitialisation du mot de passe sans saisir ladresse email', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/')
      cy.title().should('eq', 'Your Store')
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(" My account").click({force:true})   
      cy.get('form[action="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').find('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click({force:true})
      cy.contains("Forgot Your Password?")
      cy.get('button[type="submit"]').contains('Continue').click()
      cy.contains('The E-Mail Address was not found in our records, please try again!')
    });
  })