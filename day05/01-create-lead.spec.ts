import { test } from "@playwright/test";

test(`Test to create a lead`, async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter username
   // await page.locator("#username").fill("demosalesmanager");
    await page.getByLabel("Username").fill("demosalesmanager")
    await page.waitForTimeout(2000);

    //Enter password
    await page.locator("#password").fill("crmsfa");
    await page.waitForTimeout(2000);

    //Resusability
    // const username = page.locator("#username");
    // await username.fill("demosalesmanager");

    //Click Login
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA (legacy text)
    await page.locator("text=CRM/SFA").click();
    //await page.locator("//a[contains(text(),'CRM/SFA')]").click();

    //Click Leads
    await page.locator("//a[text()='Leads']").click();
    await page.waitForTimeout(2000);

    //Click Create Lead
    await page.locator("//a[text()='Create Lead']").click();

    //Enter company name
    const companyName = page.locator("#createLeadForm_companyName");
    await companyName.fill("Testleaf");
    await page.waitForTimeout(2000);
    //Enter first name
    await page.locator("input[id='createLeadForm_firstName']").fill("Ranjini");
    await page.waitForTimeout(2000);
    //Enter last name
    await page.locator("input[id='createLeadForm_lastName']").fill("R");
    await page.waitForTimeout(2000);
    //Click Create Lead
    await page.locator("[name='submitButton']").click();

    //Get the status
    console.log(`The status is ${await page.locator("#viewLead_statusId_sp").innerText()}`);
    await page.waitForTimeout(2000);
})