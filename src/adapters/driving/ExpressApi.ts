import express, { Request, Response } from "express";
import { TaxCalculatorPort } from "../../ports/driving/TaxCalculatorPort";
import { parse } from "node:path";

export class ExpressApi {
  private app = express();

  constructor(private taxCalculator: TaxCalculatorPort) {
    // Middleware to parse JSON bodies
    this.app.use(express.json());

    // Define the Route
    this.app.get("/tax", async (req: Request, res: Response) => {
      // 1. Adapt Input: Extract data from Query Params
      const amount = parseFloat(req.query.amount as string);
      const discount = parseFloat(req.query.discount as string) || 0;

      if (isNaN(amount)) {
        res.status(400).send({ error: "Invalid amount" });
        return;
      }

      // 2. Call the Port (The Core)
      const tax = await this.taxCalculator.calculateTax(amount, discount);

      // 3. Adapt Output: Return JSON Response
      res.send({
        amount,
        discount,
        tax,
      });
    });
  }

  start(port: number) {
    this.app.listen(port, () => {
      console.log(`Hexagonal Tax API listerning on http://localhost:${port}`);
    });
  }

  public getApp() {
    return this.app;
  }
}
