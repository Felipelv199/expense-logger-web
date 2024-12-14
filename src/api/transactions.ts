import { Transaction } from "@/types";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN as string;

export async function fetchAllTransactions(): Promise<Transaction[]> {
  const response = await fetch(`${API_DOMAIN}/transactions`);
  return response.json();
}
