import { fetchByPageTransactions } from "@/api/transactions";
import { GetTransactionsParams } from "@/types/api";

export const handleFetchByPageTransactions = async (
  { page, pageSize }: GetTransactionsParams,
  signal?: AbortSignal,
) => {
  const response = await fetchByPageTransactions({ page, pageSize }, signal);
  return response.data;
};
