import { chromium, firefox, webkit, Browser, BrowserContext, Page, devices } from 'playwright';

export class PlaywrightSetup {
browser!: Browser;
context!: BrowserContext;
page!: Page;

async launchBrowser(browserName: string, mobileEmulation?: string) {
switch (browserName) {
case 'chromium':
this.browser = await chromium.launch({ headless: false });
break;
case 'firefox':
this.browser = await firefox.launch({ headless: false });
break;
case 'webkit':
this.browser = await webkit.launch({ headless: false });
break;
default:
throw new Error('Unsupported Browser');
}
if (mobileEmulation) {
  const device = devices[mobileEmulation];
  this.context = await this.browser.newContext({ ...device });
} else {
  this.context = await this.browser.newContext();
}

this.page = await this.context.newPage();
return this.page;
}

async close() {
await this.context.close();
await this.browser.close();
}
}