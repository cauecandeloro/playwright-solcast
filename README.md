# E2E Testing - Solcast Website

E2E test suite for the [Solcast](https://solcast.com.br) institutional website using Playwright.

---

## About the Project

Solcast is a Brazilian technology company specializing in BIaaS (Business Intelligence as a Service). This project covers the main user flows and interface validations of the public website with automated end-to-end tests, running across three browsers on every push via GitHub Actions.

## Tech Stack

- [Playwright](https://playwright.dev/) — E2E testing framework
- TypeScript
- GitHub Actions — CI/CD pipeline

## Test Coverage

| Module | Scenarios |
|---|---|
| Navigation | Homepage load, navigate to Sobre nós, Serviços, Cases and Contato pages |
| Homepage | Company logo, main headline, services link, cases link, budget button, contact information |
| Contact Form | Form display, submit button, input validation for all fields |
| Responsive | Hamburger menu on mobile, budget button on mobile, logo on mobile, desktop menu, logo on desktop |

## Project Structure

    playwright-solcast/
    ├── tests/
    │   ├── navigation.spec.ts
    │   ├── homepage.spec.ts
    │   ├── contact.spec.ts
    │   └── responsive.spec.ts
    ├── .github/
    │   └── workflows/
    │       └── playwright.yml
    ├── playwright.config.ts
    └── package.json

## How to Run Locally

**Prerequisites:** Node.js 24+

```bash
# Clone the repository
git clone https://github.com/cauecandeloro/playwright-solcast.git
cd playwright-solcast

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run tests in a specific browser
npx playwright test --project=chromium

# Open HTML report
npx playwright show-report
```

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions across Chromium, Firefox and WebKit.