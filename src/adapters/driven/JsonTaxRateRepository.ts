import { GetTaxRate } from "../../ports/driven/TaxRateRepository";

export const getJsonRate: GetTaxRate = async () => {
  console.log("Fetching rate from external JSON source...");
  return 0.15;
};