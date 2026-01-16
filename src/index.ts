import { createTaxCalculator } from "./core/TaxCalculator";
import { getJsonRate } from "./adapters/driven/JsonTaxRateRepository";
import { getStubRate } from "./adapters/driven/StubTaxRateRepository";
import { startConsoleApp } from "./adapters/driving/ConsoleUI";

// 1. Choose Dependency (Function)
const getRate = getJsonRate; // or getStubRate

// 2. Create Core (Higher Order Function)
const calculateTax = createTaxCalculator(getRate);

// 3. Start App (Pass the function)
startConsoleApp(calculateTax);