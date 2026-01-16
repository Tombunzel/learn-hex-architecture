import { GetTaxRate } from "../ports/driven/TaxRateRepository";
import { CalculateTax } from "../ports/driving/TaxCalculatorPort";

// This function "injects" the dependencies and returns the domain logic.
export const createTaxCalculator = (getRate: GetTaxRate): CalculateTax => {
  return async (amount: number, discount: number = 0): Promise<number> => {
    const rate = await getRate();
    const discountedAmount = Math.max(0, amount - discount);
    return discountedAmount * rate;
  };
};