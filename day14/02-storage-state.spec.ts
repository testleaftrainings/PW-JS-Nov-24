import { test } from "@playwright/test";

test(`Test to verify Lead Creation`, async ({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Qeagle@123");
    await page.click("#Login");
    //Get the login details
    await page.context().storageState({path:"creds/sf_login_storage.json"})  
})