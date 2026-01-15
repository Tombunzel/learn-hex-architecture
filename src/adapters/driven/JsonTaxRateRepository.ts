// This file simulates an external storage system.

import { TaxRateRepository } from "../../ports/driven/TaxRateRepository";

export class JsonTaxRateRepository implements TaxRateRepository {
  getRate(): number {
    // In a real app, this would read a file or call an API.
    // For now, we simulate a different external value (e.g., 15%).
    console.log("Fetching rate from external JSON source...");
    return 0.15;
  }
}
