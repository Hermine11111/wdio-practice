const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/product.page');

const { expect, assert } = require('chai');
require('chai').should();

describe('Simple Tests', () => {

    //  1. LOGIN (EXPECT)
    it('Login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(
            'customer@practicesoftwaretesting.com',
            'welcome01'
        );

        // check URL instead of element
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('account');
        });

        const url = await browser.getUrl();
        expect(url).to.include('account');
    });

    // 2. VIEW PRODUCT (ASSERT)
    it('View product details', async () => {
        await ProductPage.openFirstProduct();

        const title = await ProductPage.productTitle.getText();
        const price = await ProductPage.productPrice.getText();

        assert.isNotEmpty(title);
        assert.isNotEmpty(price);
    });

    // 3. ADD TO CART (SHOULD)
    it('Add product to cart', async () => {
        await ProductPage.openFirstProduct();

        await ProductPage.addToCart();

        const count = await ProductPage.cartCount.getText();

        count.should.not.equal('0');
    });

    // 4. SEARCH (EXPECT)
    it('Search exact product', async () => {
        await browser.url('/');

        const name = 'Hammer';

        await ProductPage.searchProduct(name);

        await browser.waitUntil(async () => {
            return (await $$('[data-test="product-name"]')).length > 0;
        });

        const results = await $$('[data-test="product-name"]');

        let found = false;

        for (let product of results) {
            const text = await product.getText();

            if (text.toLowerCase().includes(name.toLowerCase())) {
                found = true;
                break;
            }
        }

        expect(found).to.be.true;
    });

});