// The "Contract" is also just a function signature
export type CalculateTax = (amount: number, discount?: number) => Promise<number>;