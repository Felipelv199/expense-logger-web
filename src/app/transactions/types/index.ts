import { HelperMessage } from "@/types/api";

export type TransactionColumnsIds =
  | "amount"
  | "name"
  | "date"
  | "id"
  | "category";

export type TransactionRowValue = Date | number | string | undefined;

export type TransactionRow = Record<TransactionColumnsIds, TransactionRowValue>;

export interface TableColumn {
  id: TransactionColumnsIds;
  value: string;
}

export interface FormInputsValues {
  amount?: string;
  date?: Date;
  description?: string;
  name?: string;
  categoryId?: number;
}

export interface FormInputsHelperMessages {
  name?: HelperMessage;
  amount?: HelperMessage;
  date?: HelperMessage;
  description?: HelperMessage;
}
