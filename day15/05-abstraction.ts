abstract class BasePage {

    protected url: string;
    constructor(url: string) {
        this.url = url;
    }
    //Concrete method with full implementation
    public openPage():void {
        console.log(`Navigating to ${this.url}`);
        
    }
    //Abstract method - no implementation
     abstract getTitle(): string;

}

class Login extends BasePage {

    constructor() {
        super("https://www.amazon.in/products");
    }
    getTitle(): string {
       return `Amazon-India`
    }
}

const log = new Login();
log.openPage();
console.log(log.getTitle());
