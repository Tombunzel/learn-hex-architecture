import { TaxCalculator } from "./core/TaxCalculator";
import { JsonTaxRateRepository } from "./adapters/driven/JsonTaxRateRepository";
import { ExpressApi } from "./adapters/driving/ExpressApi";

// 1. Wire the Repo (Driven)
const myRepo = new JsonTaxRateRepository();

// 2. Wire the Core
const myCore = new TaxCalculator(myRepo);

// 3. Wire the Web API (Driving)
const myApi = new ExpressApi(myCore);

// 4. Start Server on port 3000
myApi.start(3000);
