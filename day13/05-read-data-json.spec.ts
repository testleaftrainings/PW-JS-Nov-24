import { expect, test } from "@playwright/test";
import loginAppData from "../../data/login.json";
import fs from "fs";
import path from "path";

loginAppData.forEach(testDataObject => {

    test(`Test to read data using ${testDataObject.testTitle} .json file`, async ({page}) => {
        await page.goto(`https://login.salesforce.com`);
        await page.fill("#username", testDataObject.username);
        await page.fill("#password", testDataObject.password);
        await page.click("#Login");
        console.log(`${await page.title()}`);
        await expect(page).toHaveTitle("Home | Salesforce");

})
})

//Reading the data dynamically
const loginData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/login.json'), 'utf-8'))
for(const credentials of loginData)
test.only(`Test to read dynamic data using ${credentials.testTitle} .json file`, async ({page}) => {
    await page.goto(`https://login.salesforce.com`);
    await page.fill("#username",credentials.username);
    await page.fill("#password", credentials.password);
    await page.click("#Login");
    console.log(`${await page.title()}`);
    await expect(page).toHaveTitle("Home | Salesforce");

})