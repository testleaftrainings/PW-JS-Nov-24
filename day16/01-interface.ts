interface PageActions {
    open(): void;
    close(): void;
}

class DashboardPage implements PageActions {
    open(): void {
       console.log(`Opening the dashboard page`);
       
    }
    close(): void {
       console.log('Closing the dashboard page');
       
    }
}

const dashboard = new DashboardPage();
dashboard.open();
dashboard.close();