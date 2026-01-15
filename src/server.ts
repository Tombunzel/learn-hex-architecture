import { TaxCalculator } from "./core/TaxCalculator";
import { JsonTaxRateRepository } from "./adapters/driven/JsonTaxRateRepository";
// import { StubTaxRateRepository } from "./adapters/driven/StubTaxRateRepository";
import { ExpressApi } from "./adapters/driving/ExpressApi";

// 1. Wire the Repo (Driven)
// === OPTION A: External JSON File ===
const myRepo = new JsonTaxRateRepository();
/// === OPTION B: Hardcoded Stub (Dev/Testing) ===
// const myRepo = new StubTaxRateRepository();

// 2. Wire the Core
const myCore = new TaxCalculator(myRepo);

// 3. Wire the Web API (Driving)
const myApi = new ExpressApi(myCore);

// 4. Start Server on port 3000
myApi.start(3000);
