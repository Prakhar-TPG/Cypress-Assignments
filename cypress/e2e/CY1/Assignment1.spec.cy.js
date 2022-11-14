/// <reference types="cypress" />
describe("CY Assignment 1", function () {

    beforeEach(function () {
        cy.fixture('mylocator.json').then(function (mylocator) {
            this.mylocator = mylocator
        })
        cy.fixture('user.json').then(function (data) {
            this.data = data
        })
        cy.url_check()
    })

    it('Login credentials using loop', function () {

        for (let i = 0; i < this.data.Valid_user.length; i++) {

            cy.loginPage(this.mylocator.username_loc, this.data.Valid_user[i].name, this.mylocator.password_loc, this.data.Valid_user[i].password, this.mylocator.login_button)
            cy.logout(this.mylocator)

        }
    })
    it("Verify login with invalid username & invalid password", function () {
        cy.loginPage(this.mylocator.username_loc, this.data.Invalid_user.name, this.mylocator.password_loc, this.data.Invalid_user.password, this.mylocator.login_button)
        cy.user_validation(this.mylocator)
    })
})