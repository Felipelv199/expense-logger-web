export type Account = "Revolut" | "OTP";

export interface Category {
  id: number;
  name: string;
  budgetId: number;
}

export interface Friend {
  name: string;
}

export interface Split {
  ammount: number;
  friend: Friend;
}

export interface Transaction {
  amount: number;
  date: Date;
  description: string;
  id: string;
  name: string;
}

export enum TransactionType {
  INCOME = "Income",
  EXPENSE = "Expense",
  TRANSFER = "Transfer",
}

export interface AppConfiguration {
  apiDomain: string;
}
