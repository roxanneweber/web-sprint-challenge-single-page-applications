//* write tests here

describe('Pizza App', () => {
	// start with fresh state!!

	beforeEach(() => {
		cy.visit('http://localhost:3000/pizza');
	});

	//* helpers for the selectors
	const textInput = () => cy.get('input[name=name');
	const foobarInput = () => cy.get('input[name=foobar]');

	//* submit button on the form page
	const submitBtn = () => cy.get('button[id="submit-btn"');
	//link button on the home page
	const clickOrderBtn = () => cy.get('button[id="order-form-btn"');

	//* some initial checks

	it('checks that all is well', () => {
		expect(1 + 2).to.equal(3);
		expect(2 + 2).not.to.equal(5);
		expect({}).not.to.equal({});
		expect({}).to.eql({}); //
	});

	it('the proper elements are showing', () => {
		textInput().should('exist');
		foobarInput().should('not.exist');
		submitBtn().should('exist');
		clickOrderBtn().should('not.exist');

		//* element based on text on the page
		cy.contains('Open from 10am to 12pm').should('not.exist');
		cy.contains('Build your Pizza').should('exist');

		it('can type in the inputs', () => {
			textInput()
				.should('have.value', '')
				.type('Bobby, Roxanne Weber')
				.should('have.value', 'Bobby, Roxanne Weber');
		});
	});
});
