//Old js version
//const {test, expect, chromium} = require("@playwright/test");

//New js version
import{test as myTest, expect, chromium} from "@playwright/test";

//Playwright import
import { counterFunction } from "./counter.js";

import Homepage from "./Homepage.js";


//dou vacancies
myTest('Календар page', async({page}) => {
    await page.goto("https://jobs.dou.ua/");

    //Work like implicit wait - till the end of timeout
    //await page.waitForTimeout(5000);

    //Worl like Explixit wait - if element will be found faster, then click will be perfirmed
    //without waiting till the time will end
    await page.getByRole('link', { name: 'Календар' }).click({timeout: 5000});
    //console.log(counterFunction(5,5));

    await expect(page).toHaveURL("https://dou.ua/calendar/");
    await expect(page).toHaveTitle("Календар IT-подій | DOU");

    await page.close();
})

myTest('dou jobs combobox contain search word', async() => {
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

myTest('test contains Odessa location', async() => {
    let browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://jobs.dou.ua/");
    await page.pause();

    //Use as page object
    // let homepage = new Homepage(page);
    // await homepage.clickLink();

    await page.getByRole('link', { name: 'Project Manager', exact: true }).click();
    await page.getByRole('link', { name: 'Без досвіду' }).click();
    
    await expect(page.url()).toBe('https://jobs.dou.ua/first-job/?from=exp');

    await page.close();
    await browser.close();
})

