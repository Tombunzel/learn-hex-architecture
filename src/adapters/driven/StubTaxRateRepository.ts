import { GetTaxRate } from "../../ports/driven/TaxRateRepository";

// A simple pure function (or async function)
export const getStubRate: GetTaxRate = async () => {
  return 0.2; // 20%
};