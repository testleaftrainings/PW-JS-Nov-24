import { test } from "@playwright/test";
import { getAccessToken } from "./authHelper";

let accessToken:any;
let instUrl:any;
let id: any;
test(`Use access token in the test from the function getAccessToken`, async () => {
   
    const authData = await getAccessToken();
    accessToken  = authData.accessTokenFunc;
    instUrl = authData.instUrlFunc;
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
                "Name" : "Hari Prasanna"       
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
            "Name" : "Hari Prasanna"       
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