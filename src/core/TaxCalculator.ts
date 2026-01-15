import { TaxCalculatorPort } from "../ports/driving/TaxCalculatorPort";
import { TaxRateRepository } from "../ports/driven/TaxRateRepository";

export class TaxCalculator implements TaxCalculatorPort {
  // We use "Dependency Injection" here.
  constructor(private rateRepository: TaxRateRepository) {}

  calculateTax(amount: number, discount: number = 0): number {
    const rate = this.rateRepository.getRate();
    const discountedAmount = amount - discount;

    // Ensure we don't return negative tax if discount > amount
    const finalAmount = Math.max(0, discountedAmount);

    return finalAmount * rate;
  }
}
