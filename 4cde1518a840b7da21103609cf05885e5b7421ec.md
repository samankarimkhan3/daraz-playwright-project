# Test info

- Name: Daraz search, filter, count, and free shipping test
- Location: C:\Users\pdf\daraz-playwright\tests\searchAndFilter.spec.js:8:1

# Error details

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('.gridItem--Yd0sa') to be visible
    - waiting for" https://www.daraz.pk/catalog/?spm=a2a0e.tm80335142.search.d_go&q=Mobile%20Accessories" navigation to finish...
    - navigated to "https://www.daraz.pk/catalog/?spm=a2a0e.tm80335142.search.d_go&q=Mobile%20Accessories"
    - waiting for" https://www.daraz.pk/" navigation to finish...
    - navigated to "https://www.daraz.pk/#?"

    at HomePage.searchItem (C:\Users\pdf\daraz-playwright\pages\HomePage.js:10:25)
    at C:\Users\pdf\daraz-playwright\tests\searchAndFilter.spec.js:13:5
```

# Test source

```ts
   1 | exports.HomePage = class HomePage {
   2 |     constructor(page) {
   3 |         this.page = page;
   4 |     }
   5 |
   6 |     async searchItem(item) {
   7 |         await this.page.goto('https://www.daraz.pk/');
   8 |         await this.page.fill('input[name="q"]', item);
   9 |         await this.page.keyboard.press('Enter');
> 10 |         await this.page.waitForSelector('.gridItem--Yd0sa', { timeout: 120000 }); //  wait for products
     |                         ^ Error: page.waitForSelector: Target page, context or browser has been closed
  11 |         await this.page.waitForLoadState('networkidle');
  12 |     }
  13 |
  14 |     async closePopupIfExists() {
  15 |         await this.page.locator('div[class*="close"], button[class*="close"]')
  16 |             .click({ timeout: 3000 })
  17 |             .catch(() => {});
  18 |     }
  19 | };
```