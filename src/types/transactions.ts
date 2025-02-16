import { HelperMessage } from "@/types/api";

export type RowAction = {
  icon: React.ReactNode;
  onClick: (rowId: string) => void;
};

export type TransactionColumnsConfig = {
  amount: number;
  name: string;
  date: Date;
  category: string;
};

export type TransactionColumnsIds = keyof TransactionColumnsConfig;

export type TransactionColumnNames = { [k in TransactionColumnsIds]: string };

export type TransactionRowValue =
  TransactionColumnsConfig[TransactionColumnsIds];

export type TransactionRow = {
  [K in TransactionColumnsIds]: string;
} & {
  rowActions?: RowAction[];
  id: string;
};

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
