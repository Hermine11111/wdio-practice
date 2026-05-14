const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/product.page');
const { expect } = require('chai');

const TIMEOUT = 40000; // timeout constant for CI and slow environments

// Login
Given('I open the login page', async () => { 
    await LoginPage.open(); 
});

When('I login with email {string} and password {string}', async (email, password) => { 
    await LoginPage.login(email, password); 
});

Then('I should be redirected to the account page', async () => {
    await browser.waitUntil(
        async () => (await browser.getUrl()).includes('account'),
        { timeout: TIMEOUT } // use the constant
    );
    expect(await browser.getUrl()).to.include('account');
});

// Product
Given('I open the first product', async () => { 
    await ProductPage.openFirstProduct(); 
});

Then('the product title and price should be displayed', async () => {
    expect(await ProductPage.productTitle.getText()).to.not.be.empty;
    expect(await ProductPage.productPrice.getText()).to.not.be.empty;
});

// Cart
When('I add the product to the cart', async () => { 
    await ProductPage.addToCart(); 
});

Then('the cart count should be greater than 0', async () => { 
    expect(parseInt(await ProductPage.cartCount.getText())).to.be.greaterThan(0); 
});

// Search
Given('I am on the home page', async () => { 
    await browser.url('/'); 
});

When('I search for the product {string}', async (name) => { 
    await ProductPage.searchProduct(name); 
});

Then('the product {string} should be found in the results', async (name) => {
    await browser.waitUntil(
        async () => (await $$('[data-test="product-name"]')).length > 0,
        { timeout: TIMEOUT } // replaced 5000 with TIMEOUT
    );

    const results = await $$('[data-test="product-name"]');
    let found = false;
    for (const product of results) {
        const text = await product.getText();
        if (text.toLowerCase().includes(name.toLowerCase())) {
            found = true;
            break;
        }
    }
    expect(found).to.be.true;
});