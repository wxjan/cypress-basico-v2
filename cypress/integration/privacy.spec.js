it('testa a página da política de privacidade de forma independente', function(){
  cy.visit('./src/index.html')

  cy.contains('Talking About Testing').should('be.visible')
})