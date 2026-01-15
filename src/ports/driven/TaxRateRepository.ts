export interface TaxRateRepository {
  getRate(): Promise<number>;
}
