import { TaxCalculator } from "../../core/TaxCalculator";
import { StubTaxRateRepository } from "../driven/StubTaxRateRepository";
import { JsonTaxRateRepository } from "../driven/JsonTaxRateRepository";

describe("TaxCalculator with Different Adapaters", () => {
  it("works with the Stub Repository (20%)", async () => {
    // 1. Arrange: Create the core
    const stubRepo = new StubTaxRateRepository();
    const calculator = new TaxCalculator(stubRepo);

    // 2. Act: Call the driving port
    const result = await calculator.calculateTax(100);

    // 3. Assert: verify the behaviour
    expect(result).toBe(20);
  });

  it("works with the JSON Repository (15%)", async () => {
    // Thanks to Hex, we plug in the new adapter into the same core.
    const JsonRepo = new JsonTaxRateRepository();
    const calculator = new TaxCalculator(JsonRepo);

    const result = await calculator.calculateTax(100);

    expect(result).toBe(15);
  });

  it("should apply discount before calculating tax", async () => {
    // 1. Arrange
    // Using the 20% Stub Repo
    const stubRepo = new StubTaxRateRepository();
    const calculator = new TaxCalculator(stubRepo);

    // 2. Act
    // 100 amount - 20 discount = 80 taxable
    // 80 * 0.2 tax rate = 16
    const result = await calculator.calculateTax(100, 20);

    // 3. Assert
    expect(result).toBe(16);
  });
});
