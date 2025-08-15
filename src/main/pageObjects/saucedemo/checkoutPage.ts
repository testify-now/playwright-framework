import { Page } from 'playwright';

export class CheckoutPage {
constructor(private page: Page) {}

async checkout(firstName: string, lastName: string, postalCode: string) {
await this.page.click('#checkout');
await this.page.fill('#first-name', firstName);
await this.page.fill('#last-name', lastName);
await this.page.fill('#postal-code', postalCode);
await this.page.click('#continue');
await this.page.click('#finish');
}

async getCompleteMessage() {
return await this.page.textContent('.complete-header');
}
}