import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
testDir: './src/test',
timeout: 60000,
retries: 1,
reporter: [['list'], ['allure-playwright']],
projects: [
{
name: 'chromium',
use: { ...devices['Desktop Chrome'] }
},
{
name: 'firefox',
use: { ...devices['Desktop Firefox'] }
},
{
name: 'webkit',
use: { ...devices['Desktop Safari'] }
},
{
name: 'mobile-chrome',
use: { ...devices['Pixel 5'] }
},
{
name: 'mobile-safari',
use: { ...devices['iPhone 12'] }
}
],
});