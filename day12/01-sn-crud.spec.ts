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

})

test(`To retrieve a specific incident`, async ({request}) => {
    const getResponse = await request.get(`https://dev186929.service-now.com/api/now/table/incident/${sysId}`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46MkFxak4hbEMyIVZ5",
                "Content-Type": "application/json"
            }
        })

    //To get the response body
        const respBody = await getResponse.json();
        console.log(respBody);
        
    //To get the status code
    const apiStatusCode = getResponse.status();
    console.log(`The status code is ${apiStatusCode}`);
    expect(apiStatusCode, 'expecting api status to be 200').toBe(200);
})

test(`To retrieve all incidents`, async ({request}) => {
    const getAllResponse = await request.get(`https://dev186929.service-now.com/api/now/table/incident`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46MkFxak4hbEMyIVZ5",
                "Content-Type": "application/json"
            }
        })

    //To get the response body
        const respBody = await getAllResponse.json();
        console.log(respBody);
        
    //To get the status code
    const apiStatusCode = getAllResponse.status();
    console.log(`The status code is ${apiStatusCode}`);
    expect(apiStatusCode, 'expecting api status to be 200').toBe(200);
})

test(`To update a specific incident`, async ({request}) => {
    const updateResponse = await request.patch(`https://dev186929.service-now.com/api/now/table/incident/${sysId}`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46MkFxak4hbEMyIVZ5",
                "Content-Type": "application/json"
            },
            
            data: {
                "short_description": "Updating the incident from Playwright"
            }
        })

    //To get the response body
        const respBody = await updateResponse.json();
        console.log(respBody);
        
    //To get the status code
    const apiStatusCode = updateResponse.status();
    console.log(`The status code is ${apiStatusCode}`);
    expect(apiStatusCode, 'expecting api status to be 200').toBe(200);
})

test(`To delete a specific incident`, async ({request}) => {
    const deleteResponse = await request.delete(`https://dev186929.service-now.com/api/now/table/incident/${sysId}`,
        {
            headers: {
                "Authorization": "Basic YWRtaW46MkFxak4hbEMyIVZ5",
                "Content-Type": "application/json"
            },
            
            data: {
                "short_description": "Updating the incident from Playwright"
            }
        })
        
    //To get the status code
    const apiStatusCode = deleteResponse.status();
    console.log(`The status code is ${apiStatusCode}`);
    expect(apiStatusCode, 'expecting api status to be 204').toBe(204);
})