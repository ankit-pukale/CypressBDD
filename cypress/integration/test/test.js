import {Given,And,When,Then} from 'cypress-cucumber-preprocessor/steps'
Given('I am login Page of Orange HRM',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('h5').should('have.text','Login')
});
And('I Enter User Name',()=>{
    cy.get('[name="username"]').type('Admin')
})
And('I Enter valid Password',()=>{
    cy.get('[type="password"]').type('admin123')
});
When('I click on login Button',()=>{
    cy.get('[type="submit"]').click()
})

Then('I redirect to DashBoard Page',()=>{
    cy.get('h6').should('have.text','Dashboard')
})

And('I Enter Invalid Password',()=>{
    cy.get('[type="password"]').type('admin123456565656')
})

Then('Error Message Displayed on page',()=>{
    cy.get('.oxd-alert-content-text').should('be.visible')
})