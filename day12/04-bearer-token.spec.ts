import { test } from "@playwright/test";

let accessToken:any;
let instUrl:any;
let id: any;
test(`To generate the access token`, async ({request}) => {
    const clientId = "3MVG9pRzvMkjMb6lZlt3YjDQwe.HYIl3TLqTtN5gSZd0eu9FRMgGrFBgIMG9NBBttWHlmR.RKvAXyY4xeyZFu";
    const clientSecret = "2CD9BC047B2EB6DD92C77BF005DDDBCEE46E155237749F3764367B1E58B56F64";
    const username = "ranjini.r@testleaf.com";
    const password = "Qeagle@123";
    const grantType = "password";
    const url = "https://login.salesforce.com/services/oauth2/token"

    const generatingToken = await request.post(url,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Connection": "keep-alive"
            },

            form: {
                "grant_type": grantType,
                "client_id": clientId,
                "client_secret": clientSecret,
                "username": username,
                "password": password
            }
        })

        const generatingTokenJSON = await generatingToken.json();
        console.log(generatingTokenJSON);

        //Access Token
        accessToken = generatingTokenJSON.access_token;
        console.log(`Access token generated: ${accessToken}`);

        //Instance url
        instUrl = generatingTokenJSON.instance_url;
        console.log(`Instance url is ${instUrl}`);      
        
})

test(`Test to create a new opportunity`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity`;
    const opportunity = await request.post(oppUrl, {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }, 

        data: {
                "CloseDate" : "2025-05-22",
                "StageName" : "Prospecting",
                "Name" : "Gayathri"       
        }
    })

    const opp_response = await opportunity.json();
    console.log(opp_response);
    
    //To get the opportunity id
    id = opp_response.id;
    console.log(`Opportunity id is ${id}`);
    
})

test(`Test to get the created opportunity`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`;
    const getOpportunity = await request.get(oppUrl, {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })

    const get_response = await getOpportunity.json();
    console.log(get_response);
    
    //To get the opportunity status
    const status = getOpportunity.status();
    console.log(`Opportunity status is ${status}`);

    const statusText = getOpportunity.statusText();
    console.log(`Opportunity status text is ${statusText}`);
    
})

test(`Test to get all the opportunities`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity`;
    const getAllOpportunity = await request.get(oppUrl, {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })

    const get_response = await getAllOpportunity.json();
    console.log(get_response);
    
    //To get the opportunity status
    const status = getAllOpportunity.status();
    console.log(`Opportunity status is ${status}`);

    const statusText = getAllOpportunity.statusText();
    console.log(`Opportunity status text is ${statusText}`);
    
})

test(`Test to update the opportunity`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`;
    const updateOpportunity = await request.patch(oppUrl, {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },

        data: {
            "CloseDate" : "2025-05-22",
            "StageName" : "Needs Analysis",
            "Name" : "Gayathri"       
    }
    })

    
    //To get the opportunity status
    const status = updateOpportunity.status();
    console.log(`Opportunity status is ${status}`);

    const statusText = updateOpportunity.statusText();
    console.log(`Opportunity status text is ${statusText}`);
    
})

test(`Test to delete the opportunity`, async ({request}) => {
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`;
    const deleteOpportunity = await request.delete(oppUrl, {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
    
    //To get the opportunity status
    const status = deleteOpportunity.status();
    console.log(`Opportunity status is ${status}`);

    const statusText = deleteOpportunity.statusText();
    console.log(`Opportunity status text is ${statusText}`);
    
})