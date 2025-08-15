import { Page } from 'playwright';

export class LoginPage {
constructor(private page: Page) {}

async navigate() {
await this.page.goto('https://www.saucedemo.com/');
}

async login(username: string, password: string) {
await this.page.fill('#user-name', username);
await this.page.fill('#password', password);
await this.page.click('#login-button');
}

async getErrorMessage() {
return await this.page.textContent('[data-test="error"]');
}
}