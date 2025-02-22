import { TableColumns } from "@/types";
import { TransactionColumnId } from "@/types/transactions";

export const TransactionColumns: Readonly<TableColumns<TransactionColumnId>> = [
  { id: "date", name: "Date" },
  { id: "name", name: "Name" },
  { id: "category", name: "Category" },
  { id: "amount", name: "Amount" },
];
