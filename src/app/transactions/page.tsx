"use client";

import { useState } from "react";

import { Stack, Typography } from "@mui/material";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { fetchByPageTransactions } from "@/api/transactions";
import CreateTransactionButton from "@/components/transactions/create-transaction-button";
import TransactionsTable from "@/components/transactions/transactions-table";
import { Pagination } from "@/types/transactions";

export default function TransactionsPage() {
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  const { data: transactions, isPending } = useQuery({
    queryKey: [
      "transactions",
      { page: pagination.page, pageSize: pagination.pageSize },
    ],
    queryFn: ({ signal }) =>
      fetchByPageTransactions(
        {
          page: pagination.page,
          pageSize: pagination.pageSize,
        },
        signal,
      ),
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  });

  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="flex-end">
        <Typography variant="h4">Transactions</Typography>
        <Stack direction="row" flexGrow={1} justifyContent="flex-end">
          <CreateTransactionButton />
        </Stack>
      </Stack>
      <TransactionsTable
        isLoading={isPending}
        onPaginationChange={setPagination}
        transactions={transactions?.data ?? []}
        pagination={{
          page: pagination.page,
          pageSize: pagination.pageSize,
          total: transactions?.total ?? 0,
        }}
      />
    </Stack>
  );
}
