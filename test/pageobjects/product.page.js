class ProductPage {

    async openFirstProduct() {
        await browser.url('/');

        // wait until products exist
        await browser.waitUntil(async () => {
            return (await $$('[data-test="product-name"]')).length > 0;
        }, { timeout: 5000 });

        const products = await $$('[data-test="product-name"]');
        await products[0].click();
    }

    // product details
    get productTitle() { return $('[data-test="product-name"]'); }
    get productPrice() { return $('[data-test="unit-price"]'); }
    get productDescription() { return $('[data-test="product-description"]'); }

    // cart
    get addToCartBtn() { return $('[data-test="add-to-cart"]'); }
    get cartCount() { return $('[data-test="cart-quantity"]'); }

    async addToCart() {
        await this.addToCartBtn.waitForDisplayed({ timeout: 5000 });
        await this.addToCartBtn.scrollIntoView();
        await this.addToCartBtn.click();
    }

    // search
    get searchInput() { return $('[data-test="search-query"]'); }
    get searchBtn() { return $('[data-test="search-submit"]'); }

    async searchProduct(name) {
        await this.searchInput.waitForDisplayed({ timeout: 5000 });
        await this.searchInput.setValue(name);
        await this.searchBtn.click();
    }
}

module.exports = new ProductPage();
