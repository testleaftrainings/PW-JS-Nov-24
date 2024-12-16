import { expect, test } from "@playwright/test";

test(`Test to assert the text box`, async ({page}) => {
    await page.goto(`https://leafground.com/input.xhtml`);
    const typeName = page.getByPlaceholder("Babu Manickam");
    //To check the textbox is enabled
    await expect(typeName).toBeEnabled({timeout:10000});
    //Enter the value
    await typeName.fill("Ranjini");
    await page.waitForTimeout(3000);

    const disabledTextbox = page.getByPlaceholder("Disabled");
    await expect(disabledTextbox).toBeDisabled();
    await disabledTextbox.fill("Ranjini");
    await page.waitForTimeout(3000);
})

test(`Assertion using hard assert`, async ({page}) => {
    await page.goto(`https://leafground.com/input.xhtml`);
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect(appendTextbox).toBeDisabled();
    await appendTextbox.fill("India");
    await page.waitForTimeout(3000);
})

test.only(`Assertion using soft assert`, async ({page}) => {
    await page.goto(`https://leafground.com/input.xhtml`);
    const appendTextbox = page.locator("//input[@value='Chennai']");
    await expect.soft(appendTextbox).toBeDisabled(); //Assertion fails
    await appendTextbox.fill("India");
    await page.waitForTimeout(3000);
})