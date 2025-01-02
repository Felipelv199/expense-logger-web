export type Account = "Revolut" | "OTP";

export interface Friend {
  name: string;
}

export interface Split {
  ammount: number;
  friend: Friend;
}

export enum TransactionType {
  INCOME = "Income",
  EXPENSE = "Expense",
  TRANSFER = "Transfer",
}

export interface AppConfiguration {
  apiDomain: string;
}
