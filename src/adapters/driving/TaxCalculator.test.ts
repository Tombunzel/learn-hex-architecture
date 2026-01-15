import { TaxCalculator } from "../../core/TaxCalculator";
import { StubTaxRateRepository } from "../driven/StubTaxRateRepository";
import { JsonTaxRateRepository } from "../driven/JsonTaxRateRepository";

describe("TaxCalculator with Different Adapaters", () => {
  it("works with the Stub Repository (20%)", () => {
    // 1. Arrange: Create the core
    const stubRepo = new StubTaxRateRepository();
    const calculator = new TaxCalculator(stubRepo);

    // 2. Act: Call the driving port
    const result = calculator.calculateTax(100);

    // 3. Assert: verify the behaviour
    expect(result).toBe(20);
  });

  it("works with the JSON Repository (15%)", () => {
    // Thanks to Hex, we plug in the new adapter into the same core.
    const JsonRepo = new JsonTaxRateRepository();
    const calculator = new TaxCalculator(JsonRepo);

    const result = calculator.calculateTax(100);

    expect(result).toBe(15);
  });
});
