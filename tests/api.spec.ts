import { test, expect } from "@playwright/test";

const BASE_URL = "https://fakestoreapi.com";

function validateProductSchema(product: any) {
  expect(typeof product.id).toBe("number");
  expect(typeof product.title).toBe("string");
  expect(typeof product.price).toBe("number");
  expect(typeof product.description).toBe("string");
  expect(typeof product.category).toBe("string");
  expect(typeof product.image).toBe("string");
}

test.describe("Fake Store API Tests", () => {
  test("GET all products", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/products`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  test("GET single product", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/products/1`);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    validateProductSchema(body);
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("price");
  });

  test("GET non-existing product", async ({ request }) => {
    const response = await request.get(`${BASE_URL}/products/9999`);

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text === "" || text === "{}").toBeTruthy();
  });
  test("POST create new product", async ({ request }) => {
    const payload = {
      title: "QA Automation Test Product",
      price: 49.99,
      description: "Created during automated API testing",
      image: "https://i.pravatar.cc",
      category: "electronics",
    };

    const response = await request.post(`${BASE_URL}/products`, {
      data: payload,
    });

    expect([200, 201]).toContain(response.status());
    const body = await response.json();

    expect(body).toHaveProperty("id");
    expect(body.title).toBe(payload.title);
    expect(body.price).toBe(payload.price);
    expect(body.category).toBe(payload.category);
    validateProductSchema(body);
  });
});
