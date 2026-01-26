import { test, expect, request } from "@playwright/test";

const BASE_URL = "https://fakestoreapi.com";

let apiContext: any;

function validateProductSchema(product: any) {
  expect(typeof product.id).toBe("number");
  expect(typeof product.title).toBe("string");
  expect(typeof product.price).toBe("number");
  expect(typeof product.description).toBe("string");
  expect(typeof product.category).toBe("string");
  expect(typeof product.image).toBe("string");
}

test.beforeAll(async () => {
  apiContext = await request.newContext({
    baseURL: BASE_URL,
    extraHTTPHeaders: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0",
    },
  });
});

test.describe("Fake Store API Tests", () => {
  test("GET all products", async () => {
    const response = await apiContext.get("/products");

    expect([200, 304]).toContain(response.status());

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  test("GET single product", async () => {
    const response = await apiContext.get("/products/1");

    expect([200, 304]).toContain(response.status());

    const body = await response.json();
    expect(body.id).toBe(1);
    validateProductSchema(body);
  });

  test("GET non-existing product", async () => {
    const response = await apiContext.get("/products/9999");

    expect([200, 404]).toContain(response.status());

    const text = await response.text();
    expect(text === "" || text === "{}").toBeTruthy();
  });

  test("POST create new product", async () => {
    const payload = {
      title: "QA Automation Test Product",
      price: 49.99,
      description: "Created during automated API testing",
      image: "https://i.pravatar.cc",
      category: "electronics",
    };

    const response = await apiContext.post("/products", {
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
