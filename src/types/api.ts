export interface Category {
  id: number;
  amount?: string;
  name: string;
  budgetId?: number;
}

export interface Transaction {
  amount: number;
  name: string;
  description?: string;
  date: string;
  id: number;
  category?: Category;
}

export interface CreateTransactionRequest {
  amount: number;
  name: string;
  description?: string;
  date: string;
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

export interface PageResponsePagination {
  page: number;
  pageSize: PageSize;
  total: number;
  totalPages: number;
}

export interface PageResponse<T> extends PageResponsePagination {
  data: T[];
}

export type PageSize = 10 | 25 | 50 | 100;
