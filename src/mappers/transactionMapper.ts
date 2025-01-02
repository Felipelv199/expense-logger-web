import { FormInputsValues, TransactionRow } from "@/app/transactions/types";
import { CreateTransactionRequest, Transaction } from "@/types/api";
import { getShortDate } from "@/utils/date";

export const mapFormInputsValuesToCreateTransactionRequest = (
  formInputsValues: FormInputsValues
): CreateTransactionRequest => ({
  amount: Number(formInputsValues.amount!),
  date: formInputsValues.date!.toString(),
  name: formInputsValues.name!,
  categoryId: formInputsValues.categoryId,
  description: formInputsValues.description,
});

export const mapTransactionToTransactionRow = (
  transaction: Transaction
): TransactionRow => ({
  amount: transaction.amount,
  date: getShortDate(transaction.date),
  name: transaction.name,
  id: transaction.id,
  category: transaction.category?.name,
});
