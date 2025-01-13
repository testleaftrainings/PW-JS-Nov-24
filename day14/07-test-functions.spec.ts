import { test } from "@playwright/test";

// //test.describe.configure({mode:"parallel", retries:2})
// test.describe(`Login Regression suite`, {
//     tag: "@sanity"
// },() => {
//     test.use({screenshot:'off'})
//     test(`Test to verify Lead Creation`, async ({page}) => {
            
//         await page.goto("https://login.salesforce.com");
//         await page.fill("#username", "ranjini.r@testleaf.com");
//         await page.fill("#password", "Qeagle@123");
//         await page.click("#Login");
//         //Get the login details
//         await page.context().storageState({path:"creds/sf_login_storage.json"})  
//     })
    
    
//     test(`Test to verify Lead Creation in salesforce`, async ({page}) => {
    
//         await page.goto("https://login.salesforce.com");
//         await page.fill("#username", "ranjini.r@testleaf.com");
//         await page.fill("#password", "Qeagle@123");
//         await page.click("#Login");
//         //Get the login details
//         await page.context().storageState({path:"creds/sf_login_storage.json"})  
//     })


// })


test(`Test to verify Lead Creation in salesforce using tags`, {

    tag: '@regression'
},
async ({page}) => {
    
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Qeagle@123");
    await page.click("#Login");
    //Get the login details
    await page.context().storageState({path:"creds/sf_login_storage.json"})  
})

test(`Test to verify Lead Creation in salesforce @smoke`, async ({page}) => {
    
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Qeagle@123");
    await page.click("#Login");
    //Get the login details
    await page.context().storageState({path:"creds/sf_login_storage.json"})  
})

test(`Test to verify Lead Creation in salesforce @smoke`, {

    annotation: {
        type:'performance',
        description: "slow test",
    }
},
async ({page}) => {
    
    await page.goto("https://login.salesforce.com");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Qeagle@123");
    await page.click("#Login");
    //Get the login details
    await page.context().storageState({path:"creds/sf_login_storage.json"})  
})