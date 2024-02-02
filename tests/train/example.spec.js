// @ts-check
const { test, expect, chromium } = require('@playwright/test');
//const { chromium } = require('playwright');

test('has title', async ({ page}) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

//For debugging use script in bash: npm run --debug or run from testing in debug mode
test('Google test', async () => {
  let browser = await chromium.launch();
  const page = await browser.newPage();

  //To run in debug mode with playwright debug redactor - put await page.pause();
  await page.pause();
  await page.goto("https://www.google.com/");

  await page.getByLabel('Пошук', { exact: true }).click();
  await page.getByLabel('Пошук', { exact: true }).fill('dog');
  await page.locator('div').filter({ hasText: 'Виберіть, про що ви хочете дати відгукDog' }).nth(2).click();
  //await expect(page.url()).toBe("");

  // await page.getByRole('link', { name: 'Docs' }).click();
  // await page.getByRole('link', { name: 'How to install Playwright' }).click();
  // await page.getByRole('tab', { name: 'pnpm' }).click();

  // var communityPageLink = await page.getByRole('link', { name: 'Community', exact: true });
  // await communityPageLink.click();
  
  //await expect(page).toHaveTitle(/Playwright/);
  await page.close();
  await browser.close();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
