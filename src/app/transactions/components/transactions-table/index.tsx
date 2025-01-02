import React from "react";

import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useFetchTransactions } from "@/app/transactions/hooks/useFetchTransactions";
import { TransactionRow } from "@/app/transactions/types";
import { Columns } from "@/consts";
import { mapTransactionToTransactionRow } from "@/mappers/transactionMapper";

import { TransactionsTableRow } from "./transactions-table-row";

export const TransactionsTable = () => {
  const { transactions } = useFetchTransactions();
  const isSkeleton = !transactions;

  if (isSkeleton) {
    return <Skeleton height={"50vh"} />;
  }

  const rows = transactions.map<TransactionRow>(mapTransactionToTransactionRow);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Columns.map((column) => (
              <TableCell key={column.id}>{column.value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TransactionsTableRow key={row.id as string} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
