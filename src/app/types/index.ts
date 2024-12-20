import { HelperMessage } from "@/types/api";

export type TransactionColumnsIds = "amount" | "name" | "date";

export interface TableColumn {
  id: TransactionColumnsIds;
  value: string;
}

export interface Form {
  amount: number;
  date: Date;
  description?: string;
  name: string;
  categoryId?: number;
}

export interface FormHelperMessages {
  name: HelperMessage;
  amount: HelperMessage;
  date: HelperMessage;
}
