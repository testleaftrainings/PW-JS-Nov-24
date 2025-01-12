import { expect, test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test(`Test to read data using .env file`, async ({page}) => {
    const username = process.env.SF_USERNAME as string;
    const password = process.env.SF_PASSWORD as string;
    await page.goto(`https://login.salesforce.com`);
    await page.fill("#username", username);
    await page.fill("#password", password);
    await page.click("#Login");
    console.log(`${await page.title()}`);
    await expect(page).toHaveTitle("Home | Salesforce");
})