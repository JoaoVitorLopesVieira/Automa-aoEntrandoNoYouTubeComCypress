
describe('Abrir o site do YouTube', () => {
    it('deve abrir o site do YouTube', () => {
      
      cy.visit('https://www.youtube.com');
  
     
      cy.url().should('include', 'youtube.com');

    
      cy.title().should('include', 'YouTube');
  
     
      cy.get('img#logo-icon-container').should('be.visible');
    });
  });
  