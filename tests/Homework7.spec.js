const {test, expect, chromium} = require("@playwright/test");


//dou vacancies
test('Календар page', async({page}) => {
    await page.goto("https://jobs.dou.ua/");
    await page.getByRole('link', { name: 'Календар' }).click();

    await expect(page).toHaveURL("https://dou.ua/calendar/");
    await expect(page).toHaveTitle("Календар IT-подій | DOU");

    await page.close();
})

test('dou jobs combobox contain search word', async() => {
    let browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://jobs.dou.ua/");
    await page.getByRole('link', { name: 'QA', exact: true }).click();
    await page.getByRole('combobox').click();
    await page.goto('https://jobs.dou.ua/vacancies/?category=Scrum+Master');
    
    await expect(page.getByRole('combobox')).toContainText('Scrum Master');

    await page.close();
    await browser.close();
})

test('test contains Odessa location', async() => {
    let browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://jobs.dou.ua/");
    await page.getByRole('link', { name: 'Project Manager', exact: true }).click();
    await page.getByRole('link', { name: 'Без досвіду' }).click();
    
    await expect(page.url()).toBe('https://jobs.dou.ua/first-job/?from=exp');

    await page.close();
    await browser.close();
})

