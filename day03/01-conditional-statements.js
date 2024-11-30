function getBrowser() {
    if(browserName==="chrome") {
        console.log("Supported browser");        
    }
    else {
        console.log("Unsupported browser");
    }
}

let browserName = "edge";
getBrowser(); 

//Multiple conditions to check
function getBrowserVersion() {
    if(browser==='chrome') {
        return 131;
    } else if(browser==='edge') {
        return 131;
    } else if(browser==='safari') {
        return 17;
    } else if(browser==='firefox'){
        return 130
    } else {
        return 'Unsupported browser'
    }
}

let browser = 'safari';
//Function Expression
let browserFunction = getBrowserVersion();
console.log(browserFunction);

//Switch statement
function getVersion() {
    switch (browser) {
        case 'chrome':
            console.log("131");
            break;
        case 'edge':
            console.log("130");
            break;  
        case 'safari':
            console.log("17");
            break;
        case 'firefox':
            console.log("128");
            break;  
        default:
            console.log("Unsupported browser");
            break;
    }
}
browser = "firefox";
getVersion();