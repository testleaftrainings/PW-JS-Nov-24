import { chromium } from "@playwright/test";

async function getAccessToken() {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    const clientId = "3MVG9pRzvMkjMb6lZlt3YjDQwe.HYIl3TLqTtN5gSZd0eu9FRMgGrFBgIMG9NBBttWHlmR.RKvAXyY4xeyZFu";
    const clientSecret = "2CD9BC047B2EB6DD92C77BF005DDDBCEE46E155237749F3764367B1E58B56F64";
    const username = "ranjini.r@testleaf.com";
    const password = "Qeagle@123";
    const grantType = "password";
    const url = "https://login.salesforce.com/services/oauth2/token"

    const generatingToken = await apiRequestContext.post(url,
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

       return {
        accessTokenFunc: generatingTokenJSON.access_token,
        instUrlFunc: generatingTokenJSON.instance_url
       }    
        
}

export {getAccessToken}