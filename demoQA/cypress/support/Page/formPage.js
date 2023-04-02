class formPage {
    getDatePicker() {
        return cy.get('div.react-datepicker');
    }
    
    elements = {
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        phoneInput: () => cy.get('#userNumber'),
        buttonClick: () => cy.get('button#submit'),
    }

    typeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }
    typeLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }
    typeEmail(email) {
        this.elements.emailInput().type(email);
    }
    typePhone(phone) {
        this.elements.phoneInput().type(phone);
    }
    clickButton() {
        this.elements.buttonClick().click();
    }
}
export default formPage;