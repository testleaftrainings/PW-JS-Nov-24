import { expect } from "@playwright/test";
import { test } from "./retry-logic.spec";

test(`Test to retry a particular test case`, async ({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.delayedFill("#username", "ranjini.r@testleaf.com");
    await page.delayedFill("#password", "Qeagle@123");
    await page.clickAndDelay("Login");
    const title = await page.title();
    console.log(`The title of the page is ${title}`);
    await expect(page).toHaveTitle("Home | Salesforce");
})