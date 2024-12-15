enum TestResult {
    Pass = 1,
    Fail,
    Skip
}

function logTestResult(testName: string, result: TestResult):void{
    console.log(`Test: ${testName}`, `Result Code: ${result}`);
    
}
//enumName.member
logTestResult("Login Page", TestResult.Pass);
logTestResult("SignUp Page", TestResult.Fail);
logTestResult("Update Profile Page", TestResult.Skip);

//String enum
enum BrowserType {
    Chrome = "chrome",
    Firefox = "firefox",
    Edge = "edge",
    Webkit = "safari"
}

function launchBrowser(browserType: BrowserType) {
    console.log(`Launch browser using ${browserType}`);
}

launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Firefox);

//heterogeneous enum
enum BrowserStatus {
    Open,
    Incognito,
    Crash = "crashed",
    Close = 2,
    Unknown
}
function reportBrowserStatus(status: BrowserStatus): string {
    return `Current browser status is ${status}`
    
}
console.log(reportBrowserStatus(BrowserStatus.Incognito));
console.log(reportBrowserStatus(BrowserStatus.Crash));

