import { expect, test } from "@playwright/test";

let sysId:any;
test(`Test to create a new incident`, async ({request}) => {

    const response = await request.post("https://dev186929.service-now.com/api/now/table/incident",
        {
            headers: {
                "Authorization": "Basic YWRtaW46MkFxak4hbEMyIVZ5",
                "Content-Type": "application/json"
            },

            data: {
                "short_description": "Created using Playwright API"
            }
        })

    //To get the json response
    const responseBody = await response.text();     //Raw JSON string
    console.log(responseBody);
    const parsedJSON = JSON.parse(responseBody)    //Manually parse it
    console.log(parsedJSON);
    console.log(parsedJSON.result.sys_id);

    

})