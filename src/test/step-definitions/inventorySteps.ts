import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TestDataLoader } from '../../main/utils/testDataLoader';
const users = require('../resources/testData/users.json');

When('I add {string} and {string} to the cart', async function (item1, item2) {
await this.inventoryPage.addItemToCart(item1);
await this.inventoryPage.addItemToCart(item2);
});

Then('I open the cart page', async function () {
await this.inventoryPage.openCart();
});

Then('I should see {int} items in the cart', async function (count) {
const cartCount = await this.page.locator('.cart_item').count();
expect(cartCount).toBe(count);
await this.closeBrowser();
});