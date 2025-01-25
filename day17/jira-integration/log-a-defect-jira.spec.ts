
//Testcase : Chatter in SalesForce
import {chromium, expect, test} from "@playwright/test";
import { createJiraIssue } from "./jira-integration";

test("Test to record tracing for a specific file" ,async ({page}) => {

await page .goto("https://login.salesforce.com");
await page.locator("input[id='username'] ").fill("majay3574@gmail.com"); 
await page.locator("input[id='password'] ").fill("Ajaymichael@007"); 
await page.locator("input[id='Login']").click();


// Wait for the page to load as it take more time for me , Timeout does not helped in my case.
await page.waitForLoadState('load');


await page.locator("//div[@class='slds-icon-waffle']").click();
await page.locator("//button[text()='View All']").click();


// Wait for the page to load as it take more time
await page.waitForLoadState('load');
await page.getByPlaceholder("Search apps or items...").fill("Service");
await page.locator("//mark[text()='Service']").first().click();


//await page.locator("//span[text()='Cases']").click();
//await page.locator("//span[contains(text(),'New Case')]").click();
//await page.locator("(//one-app-nav-bar-menu-button[contains(@class,'slds-dropdown-trigger')])").nth(2).click();



// Click on Cases and create a new case


await page.locator("(//span[text()='Cases']//following::*[local-name()='svg'])[1]").click();
await page.waitForSelector("//span[contains(text(),'New Case')]");
await page.locator("//span[contains(text(),'New Case')]").click();
await page.getByPlaceholder("Search Contacts...").click();
await page.locator("//span[contains(text(),'New Contact')]").click();
await page.locator("//div[contains(@class,'salutation')] //a[text()='--None--']").click();
await page.locator("//a[@title='Mrs.']").click();
await page.getByPlaceholder("First Name").fill("Vidya");
await page.getByPlaceholder("Last Name").fill("Test1");
await page.locator("//span[text()='Save']").click();

createJiraIssue("Creating a new contact", "Testing it using Playwright");

})
