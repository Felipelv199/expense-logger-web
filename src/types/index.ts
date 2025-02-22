import { RowAction } from "./transactions";

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

export type TableColumn<T extends string> = {
  id: T;
  name: string;
};

export type TableColumns<T extends string> = TableColumn<T>[] & {
  rowActions?: boolean;
};

type TableCell = {
  id: string;
  value: string;
  align?: "right";
};

export type TableRow<T extends string> = {
  [key in T]: TableCell;
} & {
  id: string;
  rowActions?: RowAction[];
};

export type PageSize = 10 | 25 | 50 | 100;

export interface HelperMessage {
  message: string;
  type: "error" | "info";
}
