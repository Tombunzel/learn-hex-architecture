import request from "supertest";
import { ExpressApi } from "./ExpressApi";
import { TaxCalculator } from "../../core/TaxCalculator";
import { StubTaxRateRepository } from "../driven/StubTaxRateRepository";

describe("ExpressApi Driving Adapter", () => {
  it("should return 200 and the calclulated tax", async () => {
    // 1. Arrange: Wire up the Hexagon
    const repo = new StubTaxRateRepository(); // Returns 20%
    const core = new TaxCalculator(repo);
    const apiAdapter = new ExpressApi(core);
    const app = apiAdapter.getApp();

    // 2. Act: Send a fake HTTP request
    const response = await request(app)
      .get("/tax")
      .query({ amount: "100", discount: "0" });

    // 3. Assert: Check HTTP status and JSON body
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      amount: 100,
      discount: 0,
      tax: 20,
    });
  });

  it("should handle discount correctly", async () => {
    const repo = new StubTaxRateRepository(); // Returns 20%
    const core = new TaxCalculator(repo);
    const apiAdapter = new ExpressApi(core);
    const app = apiAdapter.getApp();

    const response = await request(app)
      .get("/tax")
      .query({ amount: "100", discount: "50" });

    expect(response.status).toBe(200);
    expect(response.body.tax).toBe(10); // (100-50) * 0.2 = 10
  });
});
