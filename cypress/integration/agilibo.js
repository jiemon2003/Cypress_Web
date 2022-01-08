/// <reference types="cypress" />



it('Agilibo-Landing-page', function () {

    //cy.visit('https://bongobd.com/')
    cy.visit('http://app.devagilibo.com/')
    //cy.visit('https://www.agilibo.info/')


    


})

it('Agilibo-Sign-UP', function () {
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get('.card-body > :nth-child(1) > .btn').click()
    cy.get('#first_name').type('Test')
    cy.get('#last_name').type('User')
    cy.get('#email').type('agilibo.test29@mailinator.com')
    cy.get('#company').type('Test Company')
    cy.get('#company_contact').type('office: +49 (0) 6103 44096 Ext 10')
    cy.get('.el-button > span').click()
    cy.get('#password').type('admin123')
    cy.get('#password_confirmation').type('admin123')
    cy.get('.wizard-footer-right > [role="button"] > .el-button > span').click()
    cy.get('.wizard-footer-right > [role="button"] > .el-button > span').click()




})

it('User-Login', function () {

    //cy.get(':nth-child(5) > .nav-link').click()
    cy.wait(2000)
    cy.get('#inputEmail').type('archibo.test1@gmail.com')
    cy.wait(2000)
    cy.get('#inputPassword').type('OnlineService@321')
    cy.wait(2000)
    cy.get('.row > :nth-child(1) > .btn').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .flex-shrink-0 > .text-gray > .text-dark > .mt-4 > .btn').click()





})

it('Create Company', function () {
    cy.wait(6000)
    cy.get('#organization-menu').click()
    cy.wait(2000)
    cy.get('#companies-menu').click()
    cy.wait(2000)
    cy.get('#create-company-menu').click()
    cy.wait(2000)
    cy.get('#name').type('Test Company')
    cy.get('#email').type('test@email.com')
    cy.get('#phone').type(+88017123675443)
    cy.get('#description').type('Test Description')
    cy.get('#address').type('Test Adress')
    cy.get('.col-md-1').click()
    cy.get('.col-md-1').click()
    cy.wait(2000)
    cy.get(':nth-child(6) > .btn-primary').click()




})

it('Create Team', function () {
    cy.wait(6000)
    cy.get('#organization-menu').click()
    cy.wait(2000)
    cy.get('#teams-menu').click()
    cy.wait(2000)
    cy.get('#create-team-menu').click()
    cy.wait(2000)
    cy.get('#name').type('Test Team')
    cy.wait(2000)
    cy.get('#description').type('Test Description')
    cy.wait(2000)
    cy.get('.col-md-1').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > .btn-primary').click()
    cy.wait(2000)


})

it('Products', function () {
    cy.wait(6000)
    cy.get('#products-menu').click()
    cy.wait(2000)
    cy.get('#create-product-menu').click()
    cy.wait(2000)
    cy.get('#name').type('Test Product')
    cy.wait(2000)
    cy.get(':nth-child(4) > .btn-primary').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(9) > .btn-group > .btn').click()
    cy.wait(2000)
    cy.get('.btn-group > div > .btn-primary').click()
    cy.wait(2000)
    cy.get('.el-input__inner').type('Test Product Backlog Item')
    cy.wait(2000)
    cy.get('#acceptance_criteria').type('Test')
    cy.wait(2000)
    cy.get('#description').type('Test')
    cy.wait(2000)
    cy.get('[style="z-index: 2001;"] > .el-dialog > .el-dialog__footer > .dialog-footer > .el-button--primary > span').click()
    cy.wait(2000)
    cy.get('.point > .fas').click()



})

