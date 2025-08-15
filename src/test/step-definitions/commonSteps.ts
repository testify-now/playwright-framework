import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TestDataLoader } from '../../main/utils/testDataLoader';
const users = require('../resources/testData/users.json');
import { LoginPage } from '../../main/pageObjects/saucedemo/loginPage';
import { InventoryPage } from '../../main/pageObjects/saucedemo/inventoryPage';
import { CheckoutPage } from '../../main/pageObjects/saucedemo/checkoutPage';
import { config } from '../resources/testData/config';

Given('I launch the browser', async function () {
const browser = process.env.BROWSER || config.browsers.default;
await this.launchBrowser(browser);
this.loginPage = new LoginPage(this.page);
this.inventoryPage = new InventoryPage(this.page);
this.checkoutPage = new CheckoutPage(this.page);
});


When('I login with valid user credentials', async function () {
await this.loginPage.login(users.validUser.username, users.validUser.password);
});