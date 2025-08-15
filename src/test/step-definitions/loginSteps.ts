import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TestDataLoader } from '../../main/utils/testDataLoader';
const users = require('../resources/testData/users.json');
import { config } from '../resources/testData/config';

When('I navigate to the login page', async function () {
await this.loginPage.navigate();
});


When('I login with locked out user credentials', async function () {
// const users = TestDataLoader.loadJSON('users.json');
await this.loginPage.login(users.lockedOutUser.username, users.lockedOutUser.password);
});

Then('I should see the inventory page', async function () {
await expect(this.page).toHaveTitle(/Swag Labs/);
await this.closeBrowser();
});

Then('I should see the error message', async function () {
const errorMsg = await this.loginPage.getErrorMessage();
expect(errorMsg).toBe(config.messages.lockedOutUserError);
await this.closeBrowser();
});