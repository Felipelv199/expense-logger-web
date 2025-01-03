import { Transaction } from "@/types";
import { CreateTransactionRequest } from "@/types/api";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN as string;

export const fetchAllTransactions = async (): Promise<Transaction[]> => {
  const response = await fetch(`${API_DOMAIN}/transactions`);
  return response.json();
};

export const createTransaction = async (
  createTransaction: CreateTransactionRequest
): Promise<Transaction> => {
  const response = await fetch(`${API_DOMAIN}/transactions`, {
    method: "POST",
    body: JSON.stringify(createTransaction),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.status === 200 ? response.json() : undefined;
};
