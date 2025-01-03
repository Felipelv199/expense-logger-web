"use client";

import { Stack, Typography } from "@mui/material";

import { CreateTransactionDialog } from "./components/create-transaction-dialog";
import { TransactionsTable } from "./components/transactions-table";

export default function Transactions() {
  return (
    <Stack gap={4}>
      <Typography variant="h4">Transactions</Typography>
      <Stack direction="row" justifyContent="flex-end">
        <CreateTransactionDialog />
      </Stack>
      <TransactionsTable />
    </Stack>
  );
}
