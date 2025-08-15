import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { PlaywrightSetup } from '../../main/utils/playwrightSetup';
import { LoginPage } from '../../main/pageObjects/saucedemo/loginPage';
import { InventoryPage } from '../../main/pageObjects/saucedemo/inventoryPage';
import { CheckoutPage } from '../../main/pageObjects/saucedemo/checkoutPage';

class CustomWorld extends World {
playwrightSetup: PlaywrightSetup;
loginPage?: LoginPage;
  inventoryPage?: InventoryPage;
  checkoutPage?: CheckoutPage;
page: any;

constructor(options: IWorldOptions) {
super(options);
this.playwrightSetup = new PlaywrightSetup();
}

async launchBrowser(browserName: string, mobile?: string) {
this.page = await this.playwrightSetup.launchBrowser(browserName, mobile);
}

async closeBrowser() {
await this.playwrightSetup.close();
}
}

setWorldConstructor(CustomWorld);