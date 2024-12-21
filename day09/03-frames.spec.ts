import { test } from "@playwright/test";

test(`Test to interact with the frames`, async ({page}) => {

    await page.goto(`https://www.oneindia.com/`);
    //To get the frames
    const allFrames = page.frames();
    console.log(allFrames);
    //To get the count of frames
    const frameCount = allFrames.length;
    console.log(`The total number of frames is ${frameCount}`);
    for(let iframe of allFrames) {
        const title = await iframe.title();
        console.log(`The title of the frame is ${title}`);    
    }
    await page.waitForTimeout(3000);
})