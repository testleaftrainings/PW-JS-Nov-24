class Page {

    public loadUrl(): void {
        console.log(`Loading the base page`);        
    }
}

class LoginPage extends Page {
    public loadUrl(): void {
        console.log(`Loading the Login Page`);
    }
}
const login = new LoginPage();
login.loadUrl();