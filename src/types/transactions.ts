import { HelperMessage, PageSize } from "@/types";

export type RowAction = {
  icon: React.ReactNode;
  onClick: (rowId: string) => void;
};

export type TransactionColumnId = "date" | "amount" | "name" | "category";

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

export interface Pagination {
  page: number;
  pageSize: PageSize;
  total: number;
}
