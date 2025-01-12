import { expect, test } from "@playwright/test";
import path from "path";

test(`Test to upload files`, async ({page}) => {
    await page.goto(`https://leafground.com/file.xhtml`);
    await page.locator(".card").filter({has:page.getByText("Basic Upload")})
    .locator("input[type='file']").setInputFiles([path.join(__dirname, 'images.jpeg')]);
   
    await expect(page.locator(".card").filter({has:page.getByText("Basic Upload")})
    .locator('.ui-fileupload-filename')).toContainText('images.jpeg');

    await page.waitForTimeout(3000);

})

test.only(`Test to upload files using fileChooser`, async ({page})=> {
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    const filePromise = page.waitForEvent('filechooser');
    await page.click("#drag-drop-upload");
    const fileChooser = await filePromise;
    await fileChooser.setFiles([path.join(__dirname, 'images.jpeg')]);
    await page.waitForTimeout(3000);
})