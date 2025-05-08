const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');
const { ProductPage } = require('../pages/ProductPage');

test.setTimeout(130000); 

test('Daraz search, filter, count, and free shipping test', async ({ page }) => {
    const home = new HomePage(page);
    const search = new SearchResultsPage(page);
    const product = new ProductPage(page);

    await home.searchItem('Mobile Accessories');
    await search.closePopupIfExists(); // Close popup
    await search.applyBrandFilter('JIUMOO'); 
    await search.applyPriceFilter(500, 5000);

    const count = await search.getProductCount();
    expect(count).toBeGreaterThan(0); //  pass if products found

    await search.clickOnFirstProduct();

    const isFreeShipping = await product.isFreeShippingAvailable();
    expect(isFreeShipping).toBeTruthy(); // pass if Free Shipping present
});