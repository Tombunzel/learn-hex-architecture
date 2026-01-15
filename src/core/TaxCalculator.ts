import { TaxCalculatorPort } from "../ports/driving/TaxCalculatorPort";
import { TaxRateRepository } from "../ports/driven/TaxRateRepository";

export class TaxCalculator implements TaxCalculatorPort {
  constructor(private rateRepository: TaxRateRepository) {}

  async calculateTax(amount: number, discount: number = 0): Promise<number> {
    const rate = await this.rateRepository.getRate();
    const discountedAmount = amount - discount;

    // Ensure we don't return negative tax if discount > amount
    const finalAmount = Math.max(0, discountedAmount);

    return finalAmount * rate;
  }
}
