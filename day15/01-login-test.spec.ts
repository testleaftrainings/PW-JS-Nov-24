import { test } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

test(`Test to login using valid credentials`, async () => {
    //Create an object for the LoginPage
    const loginPage = new LoginPage();
    await loginPage.initialize();
    await loginPage.navigateTo("https://login.salesforce.com");
    await loginPage.login("ranjini.r@testleaf.com", "Qeagle@123");
    await loginPage.close();
})