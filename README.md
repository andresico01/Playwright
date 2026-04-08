   git clone https://github.com/your-username/StrongPlaywright.git
   ```
2. Navigate to the project directory:
   ```bash
   cd StrongPlaywright
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```
- **Run tests in headed mode:**
  ```bash
  npx playwright test --headed
  ```
- **Run a specific test file:**
  ```bash
  npx playwright test tests/example.spec.ts
  ```
- **Show HTML Report:**
  ```bash
  npx playwright show-report
  ```

## 📂 Project Structure

```text
├── tests/              # Test scripts
├── pages/              # Page Object models
├── playwright.config.ts # Playwright configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
