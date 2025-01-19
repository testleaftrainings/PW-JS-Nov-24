## Table of Contents
- [Device Emulation](#device-emulation)
- [Geolocation](#geolocation)
- [Console Logs](#console-logs)
- [Explicit Waits](#explicit-waits)
- [UI Mode](#ui-mode)
- [Design Patterns in Test Automation](#design-patterns-in-test-automation)
- [Introduction to Page Object Model (POM)](#introduction-to-page-object-model-pom)
- [Playwright Framework Structure](#playwright-framework-structure)
- [Framework Best Practices](#framework-best-practices)
- [Encapsulation](#encapsulation)

## Encapsulation

Encapsulation is the concept of bundling data (properties) and methods that operate on the data within a single unit (class) and restricting access to some of the object's components.

### Example:

```typescript
class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(newUsername: string): void {
        this.username = newUsername;
    }

    private encryptPassword(password: string): string {
        // Encrypt the password
        return `encrypted-${password}`;
    }
}
```

## Device Emulation

### Overview
- Playwright allows testing on different devices by emulating their characteristics (e.g., screen size, user agent).

### Use Cases
- **Responsive Testing**: Test how the application behaves on mobile, tablet, and desktop devices.
- **Cross-Browser Compatibility**: Verify that the application works across different browsers and devices.

### Example
```javascript
const { devices } = require('playwright');
const iPhone = devices['iPhone 12'];

const browser = await chromium.launch();
const context = await browser.newContext({
    ...iPhone,
    locale: 'en-US',
    geolocation: { longitude: 12.4924, latitude: 41.8902 },
    permissions: ['geolocation']
});
const page = await context.newPage();
```

## Geolocation

### Overview
- Playwright supports geolocation, allowing tests to simulate different geographic locations.

### Use Cases
- **Location-Based Testing**: Test applications that provide location-specific content or services.
- **Geofencing**: Verify the behavior of applications that restrict access based on user location.

### Example
```javascript
await context.setGeolocation({ longitude: 12.4924, latitude: 41.8902 });
await page.goto('https://amazon.com');
```

## Console Logs

### Overview
- Playwright can capture and analyze console logs from the browser during test execution.

### Use Cases
- **Debugging**: Identify errors or warnings in the browser console during tests.
- **Logging**: Track and record important events that occur during test execution.

### Example
```javascript
page.on('console', msg => console.log(msg.text()));
await page.goto('https://redus.in');
```

## Explicit Waits

### Overview
Explicit waits in Playwright allow you to wait for a certain condition to be met before proceeding with the next step in your script. This is essential for actions or events that take time to complete.

### Types of Explicit Waits

1. **`page.waitForSelector()`**: Waits for a specific DOM element to appear.
   ```javascript
   await page.waitForSelector('#username');
   ```

2. **`page.waitForTimeout()`**: Pauses execution for a set time.
   ```javascript
   await page.waitForTimeout(2000);
   ```

3. **`page.waitForLoadState()`**: Waits for the page to reach a particular state.
   ```javascript
   await page.waitForLoadState('load');
   ```

4. **`page.waitForEvent()`**: Waits for a specific event.
   ```javascript
   await page.waitForEvent('response');
   ```

### Best Practices
- Use dynamic waits like `waitForSelector` over hard waits like `waitForTimeout`.
- Combine waits for robust solutions when interacting with dynamic content.

### Example
```javascript
await page.goto('http://www.leaftaps.com/opentaps');
await page.waitForSelector('#username');
await page.fill('#username', 'admin');
await page.click('#login');
await page.waitForLoadState('load');
```

## UI Mode

### Overview
- UI Mode in Playwright provides a visual interface to view and debug test executions.
- It allows for easy inspection of test steps, network requests, and browser interactions.

### Benefits
- **Debugging**: Step through each test and inspect actions and DOM changes.
- **Visual Feedback**: View screenshots, traces, and videos for each test.
- **Ease of Use**: No need to write additional debugging code; use the interface to analyze test behavior.

### How to Use
1. Launch Playwright in UI mode:
   ```bash
   npx playwright test --ui
   ```
2. This opens an interactive interface showing the test list and results.
3. Click on any test to view detailed information, including traces and screenshots.

## Playwright Framework Structure

### Recommended Folder Structure
A well-organized framework helps maintain scalability and ease of use. Here's a recommended structure:

```plaintext
project-root/
├── tests/                 # Test files
│   ├── example.spec.js    # Example test file
│   ├── login.spec.js      # Login test file
│   ├── ...
├── utils/                 # Utility functions
│   ├── helpers.js         # Helper functions
│   ├── api-utils.js       # API-related utilities
├── fixtures/              # Test data and fixtures
│   ├── test-data.json     # Static data
│   ├── ...
├── config/                # Configuration files
│   ├── playwright.config.js # Playwright config
│   ├── environment.js     # Environment-specific configs
├── reports/               # Test reports
│   ├── html/              # HTML reports
│   ├── logs/              # Logs
├── traces/                # Playwright traces
│   ├── trace1.zip         # Trace files for debugging
├── screenshots/           # Failure screenshots
│   ├── screenshot1.png    # Example screenshot
└── package.json           # Project dependencies
```

### Key Files
- **`playwright.config.js`**: Central configuration file for browser settings, test timeouts, and more.
- **Test Files**: Each test file should be independent and focused on a specific feature.
- **Utilities**: Common functions or modules that can be reused across multiple tests.
- **Fixtures**: Predefined data or states to support test execution.

### Example Configuration
```javascript
module.exports = {
    testDir: './tests',
    timeout: 30000,
    retries: 2,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'on',
        trace: 'on',
    },
};
```
## Design Patterns in Test Automation

Design patterns are reusable solutions to common problems in test automation. They help in organizing code, making it maintainable, and improving readability. Below are some commonly used design patterns in test automation:

| Design Pattern           | Purpose                                        | Usage in Automation Frameworks                                      |
|--------------------------|------------------------------------------------|---------------------------------------------------------------------|
| **Page Object Model (POM)** | Separates page-specific logic from test cases, making tests easier to read and maintain. | Manages UI interactions through page classes.                       |
| **Factory Pattern**      | Creates objects dynamically without specifying the exact class. | Used for generating test data or page objects based on conditions.  |
| **Singleton Pattern**    | Ensures only one instance of a class exists.   | Manages a single instance of resources, like browser or database.   |
| **Command Pattern**      | Encapsulates actions as objects.               | Defines reusable test actions (e.g., login, logout).                |
| **Data-Driven Testing (DDT)** | Runs tests with multiple data sets.      | Allows testing multiple scenarios by using external data sources.   |
| **Adapter Pattern**      | Bridges incompatible interfaces.               | Integrates third-party tools or legacy code into the framework.     |
| **Decorator Pattern**    | Adds functionality to objects without altering their core behavior. | Adds features like logging and retries to test actions.             |

## Introduction to Page Object Model (POM)

The **Page Object Model (POM)** is a design pattern that structures test automation code by creating a separate class, called a “page object,” for each page or component of an application. POM simplifies code by centralizing element locators and actions in a single place, making test scripts cleaner, easier to maintain, and more readable.

#### Benefits of POM
- **Modularity**: Keeps UI locators and actions separate from test scripts, making them modular and reusable.
- **Maintainability**: Updates to locators and actions can be made in one place when the UI changes.
- **Readability**: Test cases are cleaner and focus on test logic rather than UI interaction details.

#### Example Structure of a Page Object (TypeScript)

```typescript
import { Page } from 'playwright';

class LoginPage {
    private page: Page;
    private usernameField = '#username';
    private passwordField = '#password';
    private loginButton = '#login-button';

    constructor(page: Page) {
        this.page = page;
    }

    public async setUsername(username: string): Promise<void> {
        await this.page.fill(this.usernameField, username);
    }

    public async setPassword(password: string): Promise<void> {
        await this.page.fill(this.passwordField, password);
    }

    public async login(username: string, password: string): Promise<void> {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.page.click(this.loginButton);
    }
}
```

In this example, the `LoginPage` class encapsulates locators and actions for the login page. Test cases can use this class to interact with the login page without directly accessing locators.

## Framework Best Practices

A well-structured framework improves the efficiency and reliability of test automation. Below are best practices for building and maintaining a robust framework:

#### 1. **Follow Design Patterns**
   - Implement patterns like **POM**, **Singleton**, and **Data-Driven Testing** to keep code organized and reusable.

#### 2. **Organize Code by Modules**
   - Use folders to separate tests, page objects, utilities, and configurations.
   - Each folder should have a clear purpose, making the framework easy to navigate and manage.

#### 3. **Use Base Configuration**
   - Set up a global configuration file for browser settings, timeouts, retries, and environment-specific settings to centralize configurations.

#### 4. **Implement Logging and Reporting**
   - Integrate logging to capture details for each test run.
   - Use reporting tools (e.g., Playwright’s built-in reporters or Allure) to generate comprehensive test reports.

#### 5. **Manage Test Data**
   - Store test data in separate files, allowing easy updates without modifying test logic.
   - Use environment variables to securely store sensitive data like credentials.

#### 6. **Leverage Playwright’s Features**
   - **Auto-waiting**: Playwright automatically waits for elements, reducing the need for manual waits.
   - **Browser Contexts**: Isolate tests using browser contexts, making parallel execution efficient.
   - **Trace Viewer and Video Recording**: Enable for debugging and tracking tests.

#### 7. **Enable Parallel Test Execution**
   - Use Playwright’s native parallel execution to run multiple tests simultaneously. Design tests to avoid conflicts in shared data or resources.

#### 8. **Set Up Continuous Integration (CI)**
   - Integrate the framework with a CI/CD pipeline (e.g., GitHub Actions, Jenkins) to run tests automatically on code changes.

#### 9. **Isolate Test State**
   - Each test should reset the application state to remain independent. Use Playwright hooks (`beforeEach`, `afterEach`) to manage setup and cleanup.

#### 10. **Regularly Update and Refactor**
   - Periodically update locators, configurations, and libraries. Refactor code to remove redundancies and improve readability.

---

By following these design principles and best practices, your test automation framework will be scalable, maintainable, and efficient, helping to support high-quality test coverage as your application grows.