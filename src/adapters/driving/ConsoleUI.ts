import { TaxCalculatorPort } from "../../ports/driving/TaxCalculatorPort";
import * as readline from "readline";

// This Adapter talks to the User (via Console) and calls the Port.
export class ConsoleUI {
  constructor(private TaxCalculator: TaxCalculatorPort) {}

  start() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter amount to calculate tax: ", (amountStr) => {
      rl.question("Enter discount (optional): ", (discountStr) => {
        const amount = parseFloat(amountStr);
        const discount = parseFloat(discountStr);

        const tax = this.TaxCalculator.calculateTax(amount, discount);

        console.log(`The calculated tax is: ${tax}`);
        rl.close();
      });
    });
  }
}
