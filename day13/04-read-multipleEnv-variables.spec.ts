import { expect, test } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
/**
 *  $env:NODE_ENV="production"
 *  npx playwright test filename
 *  
 */
const environment = process.env.NODE_ENV || 'testing'; //testing is the default environment
const envPath = path.join(__dirname,`../../data/${environment}.env`)
dotenv.config({path:envPath})

test(`Test to read data using .env file for different environment`, async ({page}) => {
    const username = process.env.SF_USERNAME as string;
    const password = process.env.SF_PASSWORD as string;
    await page.goto(`https://login.salesforce.com`);
    await page.fill("#username", username);
    await page.fill("#password", password);
    await page.click("#Login");
    console.log(`${await page.title()}`);
    await expect(page).toHaveTitle("Home | Salesforce");
})