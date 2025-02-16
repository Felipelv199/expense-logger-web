"use client";

import { Stack, Typography } from "@mui/material";

import CreateTransactionButton from "@/components/transactions/create-transaction-button";
import TransactionsTable from "@/components/transactions/transactions-table";

export default function TransactionsPage() {
  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="flex-end">
        <Typography variant="h4">Transactions</Typography>
        <Stack direction="row" flexGrow={1} justifyContent="flex-end">
          <CreateTransactionButton />
        </Stack>
      </Stack>
      <TransactionsTable />
    </Stack>
  );
}
