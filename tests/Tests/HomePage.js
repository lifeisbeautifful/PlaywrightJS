import {expect} from "@playwright/test";

export default class Homepage{
    constructor(page){
        this.page = page;
        this.loginLink = page.locator("//a[@id='loginLink']");
        this.logOffLink = page.locator("//a[contains(text(),'Log off')]");
        this.usernameField = page.locator("//input[@id='UserName']");
        this.passwordField = page.locator("//input[@id='Password']");
        this.LoginBth = page.locator("//input[@type='submit']");
        this.errorMessage = page.locator("//li[contains(text(),'Invalid login attempt.')]");
    }


    async InvalidLogin(username, pass, message, locator){
        await this.page.goto("http://eaapp.somee.com/Account/Login");
        await this.usernameField.fill(username);
        await this.passwordField.pressSequentially(pass);
        await this.LoginBth.click();
        await expect(this.page.locator(locator)).toHaveText(message);
    }
}