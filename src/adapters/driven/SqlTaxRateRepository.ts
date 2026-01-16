import { GetTaxRate } from "../../ports/driven/TaxRateRepository";
import sqlite3 from "sqlite3";

// We use a "Factory Function" (Closure) to hold the DB connection state
export const createSqlRateGetter = (): GetTaxRate => {
  const db = new sqlite3.Database(":memory:");

  db.serialize(() => {
    db.run("CREATE TABLE tax_rates (id INTEGER PRIMARY KEY, rate REAL)");
    db.run("INSERT INTO tax_rates (rate) VALUES (0.12)");
  });

  // Return the function that actually does the work
  return () => {
    return new Promise((resolve, reject) => {
      db.get("SELECT rate FROM tax_rates LIMIT 1", (err, row: any) => {
        if (err) reject(err);
        resolve(row ? row.rate : 0);
      });
    });
  };
};