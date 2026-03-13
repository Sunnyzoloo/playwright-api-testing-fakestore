# Playwright API Testing – FakeStore API

Automated API testing project built with **Playwright and TypeScript** to validate REST API endpoints of the FakeStore API.

This project demonstrates **API automation testing**, including HTTP status validation, response schema validation, negative testing, and automated API request execution.

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* REST API Testing
* GitHub Actions (CI/CD)

---

## Test Coverage

The automated test suite validates key FakeStore API endpoints.

### Endpoints Tested

* **GET /products** – Retrieve all products
* **GET /products/1** – Retrieve a single product
* **GET /products/9999** – Validate behavior for non-existing resources
* **POST /products** – Create a new product

### Validations Performed

* HTTP response status codes
* JSON response schema validation
* API response data accuracy
* Negative scenarios for invalid resources

---

## QA Artifacts

This project includes QA documentation demonstrating the API testing workflow.

Artifacts are located in the **`qa-artifacts`** folder:

* API Test Cases
* API Test Execution Summary

---

## Project Structure

```id="repo-structure"
playwright-api-testing-fakestore
│
├── api-tests
│   └── fakestore-api.spec.ts
│
├── qa-artifacts
│   ├── api-test-cases.md
│   └── api-test-summary.md
│
└── README.md
```

---

## How to Run the Tests

Install dependencies:

```bash id="install"
npm install
```

Run the API test suite:

```bash id="run-tests"
npx playwright test
```

---

## Author

Zoljargal Enkhbayar
Computer Science – Saint Cloud State University
