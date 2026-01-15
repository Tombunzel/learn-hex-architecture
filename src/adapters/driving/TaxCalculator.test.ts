import { TaxCalculator } from "../../core/TaxCalculator";
import { StubTaxRateRepository } from "../driven/StubTaxRateRepository";

describe("TaxCalculator Driving Adapter (Test)", () => {
  it("should calculate tax using the rate from the driven adapter", () => {
    // 1. Arrange: Create the core
    const stubRepo = new StubTaxRateRepository();
    const calculator = new TaxCalculator(stubRepo);

    // 2. Act: Call the driving port
    const result = calculator.calculateTax(100);

    // 3. Assert: verify the behaviour
    expect(result).toBe(20);
  });
});
