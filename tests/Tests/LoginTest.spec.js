const {test, expect, chromium} = require ("@playwright/test");
import Homepage from "./HomePage";


const invalidCreds = [
    {
        username: "admi",
        password: "password",
        locator: `//li[contains(text(),'Invalid login attempt.')]`,
        message: `Invalid login attempt.`
    },
    {
        username:"admin",
        password:"45",
        message:`Invalid login attempt.`,
        locator:`//li[contains(text(),'Invalid login attempt.')]`
    }
]


invalidCreds.forEach(({username, password, message, locator}) => {
test(`test invalid login for ${username} user`, async () => {
    
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    let homepage = new Homepage(page);
    await homepage.InvalidLogin(username, password, message, locator);
    await page.close();
    await browser.close();
})
})
