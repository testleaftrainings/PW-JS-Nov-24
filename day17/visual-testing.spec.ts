import { expect, test } from "@playwright/test";

test(`Visual testing using Playwright`, async ({page}) => {
    await page.goto("https://www.testleaf.com/");
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot();
})