/// <reference types="cypress" />
describe("CY Assignment 2", function () {

    beforeEach(function () {
        cy.fixture('mylocator.json').then(function (mylocator) {
            this.mylocator = mylocator
        })
        cy.fixture('Homepage_loc.json').then(function (myloc) {
            this.myloc = myloc
        })
        cy.fixture('user.json').then(function (data) {
            this.data = data
        })
        cy.fixture('CartPage_loc.json').then(function (cartloc) {
            this.cartloc = cartloc
        })
        cy.url_check()
    })


    it("add product to cart", function () {
        cy.loginPage(this.mylocator.username_loc, this.data.Valid_user[0].name, this.mylocator.password_loc, this.data.Valid_user[0].password, this.mylocator.login_button)
        cy.addproduct_to_cart_andVerify(this.myloc,this.cartloc)
    })

    it("remove from cart", function () {
        cy.loginPage(this.mylocator.username_loc, this.data.Valid_user[0].name, this.mylocator.password_loc, this.data.Valid_user[0].password, this.mylocator.login_button)
        cy.addproduct_to_cart_andVerify(this.myloc,this.cartloc)
        cy.back_to_productpage(this.cartloc,this.myloc)
    })
})