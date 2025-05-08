exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
    }

    async searchItem(item) {
        await this.page.goto('https://www.daraz.pk/');
        await this.page.fill('input[name="q"]', item);
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector('.gridItem--Yd0sa', { timeout: 120000 }); //  wait for products
        await this.page.waitForLoadState('networkidle');
    }

    async closePopupIfExists() {
        await this.page.locator('div[class*="close"], button[class*="close"]')
            .click({ timeout: 3000 })
            .catch(() => {});
    }
};