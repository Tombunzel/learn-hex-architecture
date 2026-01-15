import { TaxRateRepository } from "../../ports/driven/TaxRateRepository";

export class StubTaxRateRepository implements TaxRateRepository {
  getRate(): number {
    return 0.2; // 20% tax
  }
}
