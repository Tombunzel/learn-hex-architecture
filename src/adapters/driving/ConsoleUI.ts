import { CalculateTax } from "../../ports/driving/TaxCalculatorPort";
import * as readline from "readline";

export const startConsoleApp = (calculateTax: CalculateTax) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter amount: ", (amountStr) => {
    rl.question("Enter discount (optional): ", async (discountStr) => {
      const amount = parseFloat(amountStr);
      const discount = parseFloat(discountStr) || 0;

      const tax = await calculateTax(amount, discount);

      console.log(`The calculated tax (after discount) is: ${tax}`);
      rl.close();
    });
  });
};