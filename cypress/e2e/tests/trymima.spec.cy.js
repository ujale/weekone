import { faker } from '@faker-js/faker';

describe('template spec', () => {
    cy.on('uncaught:exception', ()=>{
        return false
    })
    it('1st signup button', ()=>{
        cy.visit('/')
        //cy.get('.Header2_menu__nav__btn__m8wm5 > .fvamil > .sc-imWYAI')
        cy.contains('Sign up').should('be.visible').click()
        const details = ['Osman Shire', 'Boluwaji', faker.internet.email('###########@yopmail.com'), faker.phone.number('+234803#######'), 'RC-12345']
        cy.get('input').each(($el, index)=>{
            cy.wrap($el).fill(details[index])
        })
        cy.contains('Next').should('be.visible').and('have.attr', 'type', 'button')
        //.click()
    })
})