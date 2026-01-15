// This file simulates an external storage system.

import { TaxRateRepository } from "../../ports/driven/TaxRateRepository";

export class JsonTaxRateRepository implements TaxRateRepository {
  async getRate(): Promise<number> {
    // Simulate an external value (e.g., 15%).
    console.log("Fetching rate from external JSON source...");
    return 0.15;
  }
}
