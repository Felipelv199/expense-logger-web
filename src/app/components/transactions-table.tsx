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

import { Columns } from "@/consts";

import { useFetchTransactions } from "../hooks/useFetchTransactions";
import { TransactionColumnsIds } from "../types";
import { getShortDate } from "../utils/date";

export const TransactionsTable = () => {
  const { transactions } = useFetchTransactions();
  const isSkeleton = !transactions;

  if (isSkeleton) {
    return <Skeleton height={"50vh"} />;
  }

  const rows = transactions.map<
    Record<TransactionColumnsIds, Date | number | string>
  >((t) => ({
    amount: t.amount,
    date: getShortDate(t.date),
    name: t.name,
    id: t.id
  }));

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
            <TableRow key={row.id.toString()}>
              {Object.keys(row).map((key) => {
                if (key === "id") return null;
                const columnId = key as TransactionColumnsIds;
                return <TableCell key={key}>{`${row[columnId]}`}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
