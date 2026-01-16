import request from "supertest";
import { createExpressApp } from "./ExpressApi";
import { createTaxCalculator } from "../../core/TaxCalculator";
import { getStubRate } from "../driven/StubTaxRateRepository";

describe("ExpressApi (Functional)", () => {
  it("should return 200 and the calculated tax", async () => {
    // Arrange
    const calculateTax = createTaxCalculator(getStubRate);
    const app = createExpressApp(calculateTax); // Just pass the function!

    // Act
    const response = await request(app)
      .get("/tax")
      .query({ amount: "100", discount: "0" });

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      amount: 100,
      discount: 0,
      tax: 20,
    });
  });
});