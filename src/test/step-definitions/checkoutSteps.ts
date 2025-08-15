import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TestDataLoader } from '../../main/utils/testDataLoader';
const users = require('../resources/testData/users.json');
import { config } from '../resources/testData/config';


When('I add {string} to the cart', async function (item) {
await this.inventoryPage.addItemToCart(item);
await this.inventoryPage.openCart();
});

When('I proceed to checkout with valid user information', async function () {
await this.checkoutPage.checkout(users.checkoutInfo.firstName, users.checkoutInfo.lastName, users.checkoutInfo.postalCode);
});

Then('I should see the order completion message', async function () {
const completeMessage = await this.checkoutPage.getCompleteMessage();
expect(completeMessage).toContain(config.messages.orderCompleteMessage);
await this.closeBrowser();
});