📑 Agenda for Day 17: CI/CD Integration  

🎯 [ Focus: Integrating Advanced Test Solutions with CI/CD Pipelines ]  
 

🕝 Session Highlights  

1️⃣ CI/CD Integration  
* Overview of continuous integration and continuous delivery.  
* Tools and best practices to streamline build, test, and deployment workflows.  

2️⃣ Custom Fixtures  
* Defining and using custom fixtures to standardize test setups.  
* Enhancing reusability and maintainability in test suites.  

3️⃣ Retry Logic  
* Strategies for handling flaky tests.  
* Configuring test retries for reliable automation.  

4️⃣ Jira Integration  
* Linking test results with Jira issues.  
* Automating status updates and reporting.  

5️⃣ Network Interception  
* Mocking and intercepting network requests for targeted testing.  
* Validating offline or restricted-network scenarios.  

6️⃣ GitHub Actions  
* Setting up and managing CI/CD workflows using GitHub Actions.  
* Practical examples: Automating test execution and notifications.  

7️⃣ Virtual Regression Testing  
* Running regression tests in virtualized or containerized environments.  
* Minimizing environment-specific issues and improving test stability.  

🕡 [Wrap Up / Q&A]

## Table of Contents
1. [Framework Best Practices](#framework-best-practices)
2. [Test Retry](#test-retry)
3. [Custom Fixtures](#custom-fixtures)
4. [Visual Testing](#visual-testing)
5. [Extending Playwright with a `.d.ts` File](#extending-playwright-with-a-dts-file)
6. [Network Interception](#network-interception)
7. [Error Handling with `try-catch` Block](#error-handling-with-try-catch-block)
8. [Cross-Browser Testing](#cross-browser-testing)
9. [Global Setup and Teardown](#global-setup-and-teardown)

## Test Retry

### Overview
Test retry allows failed tests to automatically re-run, which is helpful for handling **flaky tests** caused by network issues, timing inconsistencies, or other intermittent problems.

### Custom Retry Logic

You can create custom retry logic using the `testInfo.retry` property. This logic can be used to add delays on retry attempts to stabilize actions like filling input fields or clicking buttons. 

#### Logic for Custom Retry

- **`testInfo.retry`**: This property detects if the current test execution is a retry attempt. For actions that are more likely to fail intermittently, you can add a delay when `testInfo.retry` is `true` to give the page additional time to load or stabilize.
- **Adding Delays**: You can add custom methods (e.g., `delayedFill` and `clickAndDelay`) to wait a few seconds before retrying specific actions if they fail initially. This approach provides a more flexible retry mechanism within the test.

#### Custom Retry Code Snippet

```typescript
page.delayedFill = async (selector, value) => {
    if (testInfo.retry) {
        await page.waitForTimeout(3000); // Adds a 3-second delay on retry
    }
    await page.fill(selector, value);
};

page.clickAndDelay = async (selector) => {
    await page.click(selector);
    if (testInfo.retry) {
        await page.waitForTimeout(3000); // Adds a 3-second delay on retry
    }
};
```

#### Global Retry Configuration

In addition to custom retry logic, you can configure global retries in the `playwright.config.ts` file:

```typescript
// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
    retries: 2, // Retries each failed test up to 2 times
    timeout: 10000, // Sets a maximum timeout of 10 seconds per test
});
```

## Custom Fixtures

### Overview
Custom fixtures allow you to set up reusable configurations or components, such as logging in or initializing database states, to avoid repeating setup steps in each test.

### Fixture Logic

1. **Define Custom Logic**: Define custom actions, such as login, in a fixture.
2. **Usage**: Use the fixture across multiple tests to start tests in a predefined state, like being logged in.

```typescript
pageWithLogin: async ({ page }, use) => {
    await page.goto("https://amazon.com/login");
    await page.fill("#username", "testuser");
    await page.fill("#password", "password123");
    await page.click("#loginButton");
    await use(page); // Makes this logged-in page available for tests
};
```

With this logic, any test using the `pageWithLogin` fixture will start with a logged-in session, reducing setup code repetition.

---

## Visual Testing

### Overview
Visual testing ensures the **appearance of the UI** remains consistent by comparing screenshots to baseline images. This approach helps detect unintended layout changes, color shifts, or other visual regressions.

### Visual Testing Logic

1. **Capture and Compare Screenshots**: Use `toMatchSnapshot` to capture a screenshot and compare it to a stored baseline.

   ```typescript
   const screenshot = await page.screenshot();
   expect(screenshot).toMatchSnapshot('testleaf.png');
   ```

2. **Custom Snapshot Directory**: To store snapshots in a specific folder, set `snapshotDir` in `playwright.config.ts`:

   ```typescript
   // playwright.config.ts
   export default defineConfig({
       expect: {
           snapshotDir: 'visual-snapshots', // Custom directory for snapshots
       },
   });
   ```

## Extending Playwright with a `.d.ts` File

### Purpose of a `.d.ts` File

A `.d.ts` file in TypeScript is used to define types for JavaScript code, especially useful for augmenting existing libraries or adding custom methods. In Playwright, you can use a `.d.ts` file to add custom methods to the `Page` interface, allowing TypeScript to recognize these methods throughout your tests.

### Custom Methods with `.d.ts`

When adding custom methods (like `delayedFill` or `clickAndDelay`) to Playwright’s `Page` object, a `.d.ts` file is used to declare these new methods on the `Page` interface. This approach ensures TypeScript knows about the custom methods, providing type safety and autocomplete.

### Example: Extending `Page` Interface with `.d.ts` File

Create a file named `playwright.d.ts`:

```typescript
// playwright.d.ts
import { Page } from "@playwright/test";

declare module '@playwright/test' {
    interface Page {
        delayedFill: (selector: string, value: string) => Promise<void>;
        clickAndDelay: (selector: string) => Promise<void>;
    }
}
```

- **Explanation**:
  - The `declare module` syntax tells TypeScript to add custom methods to the existing `Page` interface.
  - `delayedFill` and `clickAndDelay` are defined as methods that accept specific parameters and return a `Promise<void>`.
  - With this file in place, TypeScript will recognize `delayedFill` and `clickAndDelay` as valid methods on the `page` object, enabling autocomplete and error checking.

---

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

## Network Interception

Network interception in Playwright allows us to monitor, modify, or mock network requests and responses. This is useful for testing API interactions, handling conditional requests, and simulating various network scenarios.

### Example: Network Interception
```javascript
const { test, expect } = require('@playwright/test');

test('Intercept network requests and mock responses', async ({ page }) => {
  await page.route('**/api/data', (route) => {
    const mockData = { data: 'Mocked Data' };
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(mockData),
    });
  });

  await page.goto('https://login.salesforce.com');
  // Verify if mocked data appears on the page or API call is intercepted
});
```

### Use Cases
- Mocking API responses for testing without relying on real server data.
- Testing scenarios where specific network conditions are required (e.g., timeouts or slow responses).
- Validating request payloads for specific API calls.

---

## Error Handling with `try-catch` Block

Using `try-catch` blocks in Playwright tests helps manage errors gracefully, especially for scenarios where specific actions may occasionally fail, but you want the test to proceed or handle failures without interrupting the workflow.

### Example: `try-catch` in Playwright
```javascript
const { test } = require('@playwright/test');

test('Example test with try-catch error handling', async ({ page }) => {
  try {
    await page.goto('https://login.salesforce.com');
    await page.click('#button'); // This might throw an error if the selector is not found
  } catch (error) {
    console.error('An error occurred:', error);
    // Optional: Take a screenshot or log the error
    await page.screenshot({ path: 'error-screenshot.png' });
  }
});
```

### Best Practices
- Use `try-catch` only where errors are expected.
- Capture screenshots or log errors for further investigation.
- Avoid wrapping the entire test in `try-catch` to keep error visibility.

---

## Cross-Browser Testing

Playwright supports testing across multiple browsers like Chromium, Firefox, and WebKit. Cross-browser testing ensures your application behaves consistently across different environments.

### Example: Running Tests on Multiple Browsers
To run tests across multiple browsers, update the Playwright configuration file (`playwright.config.js`):
```javascript
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});
```

### Command to Run Cross-Browser Tests
```bash
npx playwright test
```

### Benefits
- **Ensures Compatibility**: Validates that your application works on all major browsers.
- **Easily Configurable**: Specify each browser in `playwright.config.js` and run all tests with a single command.

---

## Global Setup and Teardown

Global setup and teardown are used to configure and clean up resources before and after the test suite runs. This is helpful for initializing test data, authenticating users, or clearing caches.

### Example: Global Setup and Teardown (`global-setup.js`)
To implement, create a `global-setup.js` and `global-teardown.js` file, then reference them in `playwright.config.js`.

#### global-setup.js
```javascript
const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com/login');
  await page.fill('#username', 'user');
  await page.fill('#password', 'password');
  await page.click('button[type="submit"]');
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
};
```

#### playwright.config.js
```javascript
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown'),
  use: {
    storageState: 'auth.json',
  },
});
```

### Benefits
- **Efficiency**: Reduces setup time by performing common initialization tasks once.
- **Persistence**: Preserves session data like login credentials across tests.

---
