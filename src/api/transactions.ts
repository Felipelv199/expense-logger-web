import { Transaction } from "@/types";
import { CreateTransactionRequest } from "@/types/api";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN as string;

export async function fetchAllTransactions(): Promise<Transaction[]> {
  const response = await fetch(`${API_DOMAIN}/transactions`);
  return response.json();
}

export async function createTransaction(createTransaction: CreateTransactionRequest): Promise<Transaction> {
  const response = await fetch(`${API_DOMAIN}/transactions`, {
    method: "POST",
    body: JSON.stringify(createTransaction),
  });
  return response.json();
};
