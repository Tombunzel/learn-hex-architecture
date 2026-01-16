import express, { Request, Response } from 'express';
import { CalculateTax } from '../../ports/driving/TaxCalculatorPort';

export const createExpressApp = (calculateTax: CalculateTax) => {
  const app = express();
  app.use(express.json());

  app.get('/tax', async (req: Request, res: Response) => {
    const amount = parseFloat(req.query.amount as string);
    const discount = parseFloat(req.query.discount as string) || 0;

    if (isNaN(amount)) {
      res.status(400).send({ error: "Invalid amount" });
      return;
    }

    const tax = await calculateTax(amount, discount);

    res.send({ amount, discount, tax });
  });

  return app;
};

export const startServer = (calculateTax: CalculateTax, port: number) => {
    const app = createExpressApp(calculateTax);
    app.listen(port, () => {
        console.log(`Hexagonal Tax API listening on http://localhost:${port}`);
    });
}