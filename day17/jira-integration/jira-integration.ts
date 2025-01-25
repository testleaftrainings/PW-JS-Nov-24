import  axios  from "axios";

const url = "https://project-practise.atlassian.net/rest/api/2/issue/"
const username = "subraja.sivathanu@qeagle.com"
const apiKey = "ATATT3xFfGF0lKs1o-jsITaikfRB6wNZl0NzvN4Rribj-GU-yeI5fzc9Me-uNiN9SgPImWLbU_1mrC11YC3yFXZAlXj7ImF8muk2nxuSnqzHcM_3xnEhURwV6_y3apthViXBg3oCh8TmQKH9p44r2Ff_rQfJWFIk5pF_h-YCEX2Xb9yfEDfmhvk=311007E8";
const projectId = "SAL";

async function createJiraIssue(summary: string, description: string) {

    const issueRequestJson = {
        "fields": {
        "project": {
            "key": projectId
        },
        "summary": summary,
        "description": description,
        "issuetype": {
            "name": "Bug"
            }
        }
    }

    //Send the POST request
    await axios.post(url, issueRequestJson, {
        auth: {
            username: username,
            password: apiKey
        },

        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log(`The API request is successful`);
    
}

export {createJiraIssue}