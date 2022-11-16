Cypress.Commands.add('loginPage', (username_loc, name, password_loc, password, login_button) => {
    cy.get(username_loc).type(name);
    cy.get(password_loc).type(password);
    cy.get(login_button).click();
})

Cypress.Commands.add('url_check', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.url().should('include', 'https://www.saucedemo.com/')
})

Cypress.Commands.add('user_validation', (mylocator) => {
    cy.get(mylocator.valid_message).invoke('text')
        .should((text1) => {
            expect(text1).contains("Epic sadface: Username and password do not match any user in this service")
        })
})

Cypress.Commands.add('logout', (mylocator) => {
    cy.get(mylocator.hamburger_icon).click();
    cy.get(mylocator.logout_button).should('contain', mylocator.Logout_name).click();
})


