import { expect, test } from "@playwright/test";

test(`Test to assert the web elements on the page`, async ({page}) => {
    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    await buttonToClick.click();

    //Locator Chaining
    // await page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button").click();

    //Assertion
    await expect(page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button")
    .filter({hasText:"I am here"})).toBeVisible({timeout:12000});

})