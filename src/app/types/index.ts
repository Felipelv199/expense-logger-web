export type TransactionColumnsIds = "amount" | "name" | "date";

export interface TableColumn {
  id: TransactionColumnsIds;
  value: string;
}
