exports.ProductPage = class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async isFreeShippingAvailable() {
        const label = this.page.locator('text=Free Shipping');
        return await label.isVisible();
    }
};