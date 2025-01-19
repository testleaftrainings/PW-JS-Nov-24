var DashboardPage = /** @class */ (function () {
    function DashboardPage() {
    }
    DashboardPage.prototype.open = function () {
        console.log("Opening the dashboard page");
    };
    DashboardPage.prototype.close = function () {
        console.log('Closing the dashboard page');
    };
    return DashboardPage;
}());
var dashboard = new DashboardPage();
dashboard.open();
dashboard.close();
