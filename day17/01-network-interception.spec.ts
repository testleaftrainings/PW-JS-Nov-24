import { expect, test } from "@playwright/test";

test(`Network interception using Salesforce login`, async ({page}) => {
    page.route("**/aura?preloadActions", async (route, request) => {
        if(request.method()==='POST') {
            console.log(`Request URL: ${request.url()}`);
            console.log(`Request headers: ${request.headers()}`);     
        }
        else {
            route.continue();
        }
    })

        await page.goto("https://login.salesforce.com");
        await page.fill("#username", "ranjini.r@testleaf.com");
        await page.fill("#password", "Qeagle@123");
        await page.click("#Login");
        const title = await page.title();
        console.log(`The title of the page is ${title}`);
        await expect(page).toHaveTitle("Home | Salesforce");

})