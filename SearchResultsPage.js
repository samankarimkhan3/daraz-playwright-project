exports.SearchResultsPage = class SearchResultsPage {
    constructor(page) {
        this.page = page;
    }

    async applyBrandFilter(brand) {
        const brandCheckbox = this.page.locator(`//label[contains(., "${brand}")]`);
        await brandCheckbox.first().scrollIntoViewIfNeeded();
        await brandCheckbox.first().waitFor({ state: 'visible', timeout: 120000 });
        await brandCheckbox.first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async applyPriceFilter(min, max) {
        await this.page.fill('input[placeholder="Min"]', min.toString());
        await this.page.fill('input[placeholder="Max"]', max.toString());
        await this.page.click('button:has-text("Apply")');
        await this.page.waitForTimeout(3000);
    }

    async getProductCount() {
        const products = await this.page.locator('.gridItem--Yd0sa').count();
        return products;
    }

    async clickOnFirstProduct() {
        await this.page.locator('.gridItem--Yd0sa').first().click();
    }

    async closePopupIfExists() {
        const popupCloseBtn = this.page.locator('button[class*="close"], .close-btn, .modal-close'); // common close classes
        if (await popupCloseBtn.first().isVisible({ timeout: 3000 }).catch(() => false)) {
            await popupCloseBtn.first().click();
        }
    }
};