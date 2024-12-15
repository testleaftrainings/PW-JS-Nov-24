//let productId: number = 7654;

let productId:number|string = 7654;
productId = 'R7654';

type productDatatype = number|string|boolean;
let accountNumber: productDatatype = "00678HG908080";
accountNumber = 87655425;
accountNumber = false;

type supportedBrowsers = "Chrome"|"Firefox";
function invokeBrowsers(browserName: supportedBrowsers) {
    if(browserName === "Chrome") {
        console.log("Launch Chrome browser");    
    } else {
        console.log("Launch Firefox browser");
    }  
}
invokeBrowsers("Chrome");

//Intersection type
type Admin = {
    adminName: string,
    privileges: string[]
}
type Employee = {
    name:string,
    empId: number,
    date: string
}

type QA = Admin & Employee

const userProfile: QA = {
    adminName: "Testleaf",
    name: "Jagadeesh",
    privileges: ['server'],
    empId: 1001,
    date: "03 Aug 2023"
}

console.log(userProfile.adminName);
console.log(userProfile.privileges);

