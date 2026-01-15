import { TaxCalculator } from "./core/TaxCalculator";
import { JsonTaxRateRepository } from "./adapters/driven/JsonTaxRateRepository";
import { ConsoleUI } from "./adapters/driving/ConsoleUI";

// 1. Choose the Driven Adapter (Strategy)
const myRepo = new JsonTaxRateRepository();

// 2. Inject it into the Core
const myCore = new TaxCalculator(myRepo);

// 3. Inject the Core into the Driving Adapter (UI)
const myUI = new ConsoleUI(myCore);

// 4. Start the App
myUI.start();
