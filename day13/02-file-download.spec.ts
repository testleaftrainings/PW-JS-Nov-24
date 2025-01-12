import { expect, test } from "@playwright/test";
import path from "path";

test.only(`Test to download a file`, async ({page})=> {
    await page.goto(`https://leafground.com/file.xhtml`);
    const fileDownloadPromise = page.waitForEvent('download');
    await page.getByRole('button', {name: 'Download'}).click();
    const fileDownloader = await fileDownloadPromise;
    //Content-Disposition response header
    await fileDownloader.saveAs(path.join("downloads/"+fileDownloader.suggestedFilename()));
    const downloadUrl = fileDownloader.url();
    console.log(`The file is downloaded from: ${downloadUrl}`);    
})