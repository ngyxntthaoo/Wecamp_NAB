
import formPage from "../support/Page/formPage.js";

Cypress.on('uncaught:exception', (err, runnable) => { return false });

describe('Test script', function () {    
  
  const form = new formPage();
  //hook event
  beforeEach(function () {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.fixture('example').then(function (data) {
      this.data = data;
    })

  })


  it('TC01 - valid data', () => {

    //text field
    cy.get('#userName-wrapper').type('Thao')
    cy.get('input#lastName').type('Faker').should('have.value', 'Faker')
    cy.get('#userEmail-wrapper').type("faker@gmail.com")

    //click radio button
    cy.get('[type="radio"]').check('Female',{force: true }) 
    cy.get('#userNumber-wrapper').type("123457890");
    //check box
    cy.get('[type="checkbox"]')
    .should('not.be.visible')
    .check("2", {force: true })
    .should('be.checked')
    cy.get('[type="checkbox"]')
      .should('not.be.visible')
      .check("3", { force: true })
      .should('be.checked')
    //file upload
    cy.get('input[type=file]')
      .selectFile('C:/Users/admin/Downloads/lab1_done.docx', { force: true })

    cy.get('#currentAddress-wrapper')
      .type("If you are posting the content below to some interview questions site or the forum, please post the link to this post as well.")


    cy.get('#dateOfBirth-wrapper').click();
    form.getDatePicker().should('be.visible');
    cy.get('select.react-datepicker__month-select').select('January');
    cy.get('select.react-datepicker__year-select').select('2002');
    cy.get('div.react-datepicker__month').contains('6').click();
    // datepicker.getMonth().select('January'); // ko dc

    cy.get('input#subjectsInput').type('a{downArrow}{enter}');
    cy.get('div#subjectsContainer').should('contain', 'a');
    
    cy.get('div#state').click().type('{downArrow}{enter}');
    cy.get('div#city').click().type('{downArrow}{downArrow}{enter}');
    cy.get('button#submit').click({force: true});
    cy.get('div.modal-content').should('be.visible');
    cy.get('button#closeLargeModal').click({force: true});
  })

  it('TC02 - invalid data', () => {
    
    cy.get('#userName-wrapper').type('1@3456 7{enter}').should('have.css', 'border-color','rgb(33, 37, 41)')
    cy.get('input#lastName').type('fghjk% ').should('have.css', 'border-color', 'rgb(40, 167, 69)')
    cy.get('#userEmail-wrapper').type('abc@gmailabc').should('have.css', 'border-color','rgb(33, 37, 41)')
    cy.get('input#userNumber').type('dfg fghjfghfg').should('have.css', 'border-color','rgb(220, 53, 69)')

  })
  
})