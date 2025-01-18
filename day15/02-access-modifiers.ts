
export class Browser {

    private browserType: string;

    constructor(browserType: string) {
        this.browserType = browserType;
    }

    private logSession() {
        console.log(`Browser session for ${this.browserType}`);        
    }

    public launchBrowser(): string {
        this.logSession(); //Private method can be called within the same class
        return `Launching ${this.browserType} browser`
    }
}

const browserSession  = new Browser('edge');
console.log(browserSession.launchBrowser());

class BaseClass {

    protected browserType: string;

    constructor(browserType: string) {
        this.browserType = browserType;
    }

    protected logSession() {
        console.log(`This is from the base class`);
        console.log(`Browser session for ${this.browserType}`);        
    }

    public launchBrowser(): string {
        return `Launching ${this.browserType} browser`
    }
}

class DashboardPage extends BaseClass {

    protected logSession() {
        console.log(`This is from dashboard page`);
        super.logSession();      
    }
    public captureScreenshot() {  
        this.logSession();
        console.log(`Capturing screenshot in ${this.browserType}`);
        
    }
}
const dashboard = new DashboardPage('chromium');
dashboard.captureScreenshot();