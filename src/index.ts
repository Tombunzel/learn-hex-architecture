import { TaxCalculator } from "./core/TaxCalculator";
import { JsonTaxRateRepository } from "./adapters/driven/JsonTaxRateRepository";
// import { StubTaxRateRepository } from "./adapters/driven/StubTaxRateRepository";
import { ConsoleUI } from "./adapters/driving/ConsoleUI";

// 1. Choose the Driven Adapter (Strategy)
// === OPTION A: JSON (15%)
const myRepo = new JsonTaxRateRepository();
// === OPTION B: Stub (20%)
// const myRepo = new StubTaxRateRepository();

// 2. Inject it into the Core
const myCore = new TaxCalculator(myRepo);

// 3. Inject the Core into the Driving Adapter (UI)
const myUI = new ConsoleUI(myCore);

// 4. Start the App
myUI.start();
