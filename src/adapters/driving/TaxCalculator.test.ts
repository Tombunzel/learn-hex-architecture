import { createTaxCalculator } from "../../core/TaxCalculator";
import { getStubRate } from "../driven/StubTaxRateRepository";
import { getJsonRate } from "../driven/JsonTaxRateRepository";

describe("TaxCalculator (Functional)", () => {
  it("should return a constant tax value using Stub", async () => {
    // Composition instead of Classes
    const calculateTax = createTaxCalculator(getStubRate);
    const result = await calculateTax(100);
    expect(result).toBe(20);
  });

  it("should work with JSON repository", async () => {
    const calculateTax = createTaxCalculator(getJsonRate);
    const result = await calculateTax(100);
    expect(result).toBe(15);
  });

  it("should apply discount", async () => {
    const calculateTax = createTaxCalculator(getStubRate);
    const result = await calculateTax(100, 20);
    expect(result).toBe(16);
  });
});