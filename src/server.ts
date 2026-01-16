import { createTaxCalculator } from "./core/TaxCalculator";
import { createSqlRateGetter } from "./adapters/driven/SqlTaxRateRepository";
import { startServer } from "./adapters/driving/ExpressApi";

// 1. Create Dependency (Factory)
const getRate = createSqlRateGetter();

// 2. Create Core (Function Composition)
const calculateTax = createTaxCalculator(getRate);

// 3. Start Server
startServer(calculateTax, 3000);