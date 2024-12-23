import { test } from "@playwright/test";

test(`Test to interact with the frames`, async ({page}) => {

    await page.goto(`https://leafground.com/frame.xhtml`);
    
    //Interact with the iframe using url
    const frame = page.frame({url:"https://leafground.com/default.xhtml"});
    frame?.click("#Click");
    await page.waitForTimeout(3000);
    /**
     * Conditional check
     * if(frame!==null){
     *      Select the frame
     *      Click the button
     * }
     * 
     * Non-nullish assertion operator
     * frame!.click("#Click")
     * frame?true:false
     * 
     */
    //Using index
    const frames = page.frames();
    await frames[4].click("button#Click");
    await page.waitForTimeout(3000);
})

test(`Test to interact with iframes using frameLocator object`, async ({page}) => {
    await page.goto(`https://leafground.com/frame.xhtml`);
    //Using frameLocator
    const frame = page.frameLocator("(//iframe)[1]");
    frame.locator("#Click").click();
    await page.waitForTimeout(3000);
    //Chaining
    //await page.frameLocator("iframe").first().locator("#Click").click();

    //Interact with nested frames
    const card = page.locator(".card").filter({hasText:"Inside Nested frame"});
    const frame_one = card.frameLocator("iframe");
    const frame_two = frame_one.frameLocator("iframe");
    await frame_two.locator("#Click").click();

    //Chaining
    // await page.locator(".card").filter({hasText:"Inside Nested frame"})
    // .frameLocator("iframe").frameLocator("iframe").locator("#Click").click();

    await page.waitForTimeout(3000);
})
