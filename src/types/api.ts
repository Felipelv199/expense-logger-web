export interface Transaction {
  amount: number;
  date: Date;
  description: string;
  id: number;
  name: string;
}

export interface CreateTransactionRequest {
  amount: number;
  date: Date;
  description: string;
  name: string;
  categoryId?: number;
}

export interface HelperMessage {
  message: string;
  type: "error" | "info";
}

export interface InputForm<T> {
  value?: T;
  helperMessage?: HelperMessage;
}

export interface CreateCategoryRequest {
  amount?: string;
  budgetId?: number;
  name: string;
}
