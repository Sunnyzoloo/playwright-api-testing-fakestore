# API Test Cases – FakeStore API

## Application

FakeStore API
https://fakestoreapi.com

## Testing Scope

This document outlines manual and automated API test cases designed to validate core FakeStore API endpoints.

The tests focus on verifying:

* HTTP status codes
* Response data structure
* JSON schema validation
* Error handling

---

## Test Cases

### TC-API-01: Retrieve All Products

**Endpoint**
`GET /products`

**Description**
Verify that the API returns a list of available products.

**Steps**

1. Send a GET request to `/products`
2. Observe the response body

**Expected Result**

* HTTP status code `200`
* Response body is a JSON array
* Product list contains at least one item

---

### TC-API-02: Retrieve Single Product

**Endpoint**
`GET /products/1`

**Description**
Verify that the API returns correct product details.

**Steps**

1. Send a GET request to `/products/1`
2. Validate the returned JSON object

**Expected Result**

* HTTP status code `200`
* Product object contains:

  * id
  * title
  * price
  * description
  * category
  * image

---

### TC-API-03: Retrieve Non-Existing Product

**Endpoint**
`GET /products/9999`

**Description**
Verify API behavior when requesting a product that does not exist.

**Steps**

1. Send a GET request to `/products/9999`

**Expected Result**

* HTTP status code `404` or empty response
* API should handle invalid product ID gracefully

---

### TC-API-04: Create New Product

**Endpoint**
`POST /products`

**Description**
Verify that a new product can be created through the API.

**Request Body Example**

```json
{
  "title": "QA Automation Test Product",
  "price": 49.99,
  "description": "Created during automated API testing",
  "image": "https://i.pravatar.cc",
  "category": "electronics"
}
```

**Expected Result**

* HTTP status code `200` or `201`
* Response includes a newly generated product ID
* Response data matches request payload
