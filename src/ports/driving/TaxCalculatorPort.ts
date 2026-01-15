// This is the "contract". Any UI or Test must follow this.
export interface TaxCalculatorPort {
  calculateTax(amount: number, discount?: number): number;
}
