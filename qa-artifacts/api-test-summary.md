# API Test Execution Summary – FakeStore API

## Project

Playwright API Testing – FakeStore API

## Objective

Validate core FakeStore API functionality using automated tests written with Playwright and TypeScript.

The tests verify endpoint availability, response status codes, and response data structure.

---

## Test Environment

Application: https://fakestoreapi.com

Testing Tool: Playwright

Programming Language: TypeScript

Execution Environment:

* Local development environment
* GitHub Actions CI pipeline

---

## Test Coverage

The automated tests validate the following API operations:

* Retrieve all products
* Retrieve a single product
* Retrieve a non-existing product
* Create a new product

These tests verify:

* HTTP status codes
* JSON response structure
* Response data validation

---

## Test Execution Results

| Test Case | Endpoint           | Result |
| --------- | ------------------ | ------ |
| TC-API-01 | GET /products      | Passed |
| TC-API-02 | GET /products/1    | Passed |
| TC-API-03 | GET /products/9999 | Passed |
| TC-API-04 | POST /products     | Passed |

Note: In CI environments, public APIs may block requests resulting in HTTP 403 responses. The test framework handles this scenario appropriately.

---

## Defects

No functional defects were identified during testing.

---

## Conclusion

The automated test suite successfully validates key FakeStore API endpoints and ensures correct response structure and behavior. These tests help maintain API reliability and support regression testing during development.
