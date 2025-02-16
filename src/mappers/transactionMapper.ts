import { CreateTransactionRequest, Transaction } from "@/types/api";
import { FormInputsValues, TransactionRow } from "@/types/transactions";

export const mapFormInputsValuesToCreateTransactionRequest = (
  formInputsValues: FormInputsValues,
): CreateTransactionRequest => ({
  amount: Number(formInputsValues.amount!),
  date: formInputsValues.date!.toString(),
  name: formInputsValues.name!,
  categoryId: formInputsValues.categoryId,
  description: formInputsValues.description,
});

export const mapTransactionToTransactionRow = (
  transaction: Transaction,
): TransactionRow => ({
  amount: transaction.amount.toString(),
  date: new Date(transaction.date).toLocaleDateString(),
  name: transaction.name,
  id: transaction.id.toString(),
  category: transaction.category?.name ?? "",
  rowActions: undefined,
});
