import { TaxRateRepository } from "../../ports/driven/TaxRateRepository";
import sqlite3 from "sqlite3";

export class SqlTaxRateRepository implements TaxRateRepository {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database(":memory:");
    this.init();
  }

  private init() {
    this.db.serialize(() => {
      this.db.run("CREATE TABLE tax_rates (id INTEGER PRIMARY KEY, rate REAL)");
      this.db.run("INSERT INTO tax_rates (rate) VALUES (0.12)");
    });
  }

  getRate(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.db.get(
        "SELECT rate FROM tax_rates LIMIT 1",
        (err: any, row: any) => {
          if (err) reject(err);
          resolve(row ? row.rate : 0);
        },
      );
    });
  }
}
