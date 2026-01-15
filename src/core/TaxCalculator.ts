import { TaxCalculatorPort } from "../ports/driving/TaxCalculatorPort";
import { TaxRateRepository } from "../ports/driven/TaxRateRepository";

export class TaxCalculator implements TaxCalculatorPort {
  // We use "Dependency Injection" here.
  constructor(private rateRepository: TaxRateRepository) {}

  calculateTax(amount: number): number {
    const rate = this.rateRepository.getRate();
    return amount * rate;
  }
}
