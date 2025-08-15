import { Page } from 'playwright';

export class InventoryPage {
constructor(private page: Page) {}

async addItemToCart(itemName: string) {
await this.page.click(`text="${itemName}" >> xpath=../../..//button[contains(@id,'add-to-cart')]`);
}

async openCart() {
await this.page.click('.shopping_cart_link');
}

async logout() {
await this.page.click('#react-burger-menu-btn');
await this.page.click('#logout_sidebar_link');
}
}