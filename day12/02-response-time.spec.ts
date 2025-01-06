import { expect, test } from "@playwright/test";

let sysId:any;
test(`Test to create a new incident`, async ({request}) => {
    const startTime = performance.now();
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
    const responseBody = await response.json();
    console.log(responseBody);

    //To get the status code
    const apiStatusCode = response.status();
    console.log(`The status code is ${apiStatusCode}`);
    expect(apiStatusCode, 'expecting api status to be 201').toBe(201);

    //To get sys_id
    sysId = responseBody.result.sys_id;
    console.log(`The sys id is ${sysId}`);

    //To get the incident number
    const incNum = responseBody.result.number;
    console.log(`The incident number is ${incNum}`);

    const endTime = performance.now();
    const responseTime = endTime - startTime;
    console.log(`Response time is ${responseTime}`);
    
    expect(responseTime).toBeLessThan(2000);
})