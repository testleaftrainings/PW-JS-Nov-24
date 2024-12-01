import { test } from "@playwright/test";

test(`Test to launch the browser`, async ({page}) => {

    // Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);

    // Get the title of the page
    console.log(`The title of the page is ${ await page.title()}`);
    
    await page.waitForTimeout(5000);

})