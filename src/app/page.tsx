"use client";

import { Container, Stack, Typography } from "@mui/material";
import { TransactionsTable } from "./components/transactions-table";
import { CreateTransactionDialog } from "./components/create-transaction-dialog";

export default function Home() {
  return (
    <Container>
      <Stack gap={4} sx={{ paddingTop: 4 }}>
        <Typography variant="h4">Transactions</Typography>
        <Stack direction="row" justifyContent="flex-end">
          <CreateTransactionDialog />
        </Stack>
        <TransactionsTable />
      </Stack>
    </Container>
  );
}
