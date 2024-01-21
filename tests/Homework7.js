const {test, expect, chromiun} = require("@playwright/test");

//dou search
test('dou jobs contain search word', async() => {
    let browser = await chromiun.launch();
    const page = await browser.newPage();
    await page.pause();

})