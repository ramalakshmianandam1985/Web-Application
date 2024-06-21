describe('User Authentication', () => {
    it('should register a new user', () => {
      cy.visit('http://localhost:3000');
      cy.get('#registerUsername').type('testuser');
      cy.get('#registerPassword').type('testpass');
      cy.get('#registerForm').submit();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('User registered successfully');
      });
    });
  
    it('should login an existing user', () => {
      cy.visit('http://localhost:3000');
      cy.get('#loginUsername').type('testuser');
      cy.get('#loginPassword').type('testpass');
      cy.get('#loginForm').submit();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Login successful');
      });
    });
  
    it('should change password for an existing user', () => {
      cy.visit('http://localhost:3000/dashboard');
      cy.get('#changeUsername').type('testuser');
      cy.get('#changePassword').type('newpass');
      cy.get('#changePasswordForm').submit();
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Password changed successfully');
      });
    });
  });
  