import { formatCurrency } from "@/helpers/formatters";
import { TableRow } from "@/types";
import { CreateTransactionRequest, Transaction } from "@/types/api";
import {
  FormInputsValues,
  RowAction,
  TransactionColumnId,
} from "@/types/transactions";

export const mapFormInputsValuesToCreateTransactionRequest = (
  formInputsValues: FormInputsValues,
): CreateTransactionRequest => ({
  amount: Number(formInputsValues.amount!),
  date: formInputsValues.date!.toString(),
  name: formInputsValues.name!,
  categoryId: formInputsValues.categoryId,
  description: formInputsValues.description,
});

export const mapTransactionToTableRow = (
  transaction: Transaction,
  rowActions: RowAction[],
): TableRow<TransactionColumnId> => ({
  amount: {
    id: "amount",
    value: formatCurrency(transaction.amount),
    align: "right",
  },
  date: {
    id: "date",
    value: new Date(transaction.date).toLocaleDateString(),
  },
  name: {
    id: "name",
    value: transaction.name,
  },
  id: transaction.id.toString(),
  category: {
    id: "category",
    value: transaction.category?.name ?? "",
  },
  rowActions,
});
