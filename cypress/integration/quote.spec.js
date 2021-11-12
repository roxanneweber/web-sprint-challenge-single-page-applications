//* write tests here

describe('Quotes App', () => {
	// start with fresh state!!

	beforeEach(() => {
		cy.visit('http://localhost:65433');
	});

	//* helpers for the selectors
	const textInput = () => cy.get('input[name=text');
	const authorInput = () => cy.get('input[name=name');
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
		authorInput().should('exist');
		submitBtn().should('exist');
		cancelBtn().should('not.exist');

		//* element based on text on the page
		cy.contains('Open from 10am to 12pm').should('exist'); // IS case sensitive

		it('can type in the inputs', () => {
			textInput()
				.should('have.value', '')
				.type('Bobby, Roxanne Weber')
				.should('have.value', 'Bobby, Roxanne Weber');
			authorInput()
				.should('have.value', '')
				.type('hello world')
				.should('have.value', 'hello world');
		});

		it('the submit button enables when both inputs are filled out', () => {
			authorInput().type('RM Weber');
			textInput().type('Test everything!');
			submitBtn().should('not.be.disabled');
		});

		it('the cancel button can reset the inputs and disable the submit button', () => {
			authorInput().type('RWeber');
			textInput().type('Web 49 is the best!');
			cancelBtn().click();
			authorInput().should('have.value', '');
			textInput().should('have.value', '');
			submitBtn().should('be.disabled');
		});
	});

	describe('Adding a new quote', () => {
		it('can submit and delete a new quote', () => {
			textInput().type('hello world');
			authorInput().type('yay we are lovin it');
			submitBtn().click();
			cy.contains('hello world').should('exist');
			cy.contains('hello world').siblings('button:nth-of-type(2)').click();
			cy.contains('hello world').should('not.exist');
		});
	});
	//! this is failing -- fix the problem
	describe('Edit existing quote', () => {
		it('can edit an existing quote', () => {
			textInput().type('hello world');
			authorInput().type('roxanne');
			submitBtn().click();
			cy.contains('hello world').should('exist');
			cy.contains('hello world').siblings('button:nth-of-type(2)');
			submitBtn().click();
			cy.contains('roxanne').siblings('button:nth-of-type(1)').click();
			authorInput().should('have.value', 'roxanne');
			textInput().type(' Please!');
			// always console.log! Please!
			authorInput().type('Harding');
			submitBtn().click();
			cy.contains('Always console.log! Please! (roxanne Harding)');
			cy.contains('Casey').should('not.exist');
		});
	});
});
