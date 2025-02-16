import {
  CreateTransactionRequest,
  PageResponse,
  Transaction,
} from "@/types/api";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN as string;

export const fetchByPageTransactions = async (
  page: number,
  pageSize: number,
): Promise<PageResponse<Transaction>> => {
  const response = await fetch(
    `${API_DOMAIN}/transactions?page=${page}&pageSize=${pageSize}`,
  );
  return response.json();
};

export const createTransaction = async (
  createTransaction: CreateTransactionRequest,
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
