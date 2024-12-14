import { Columns } from "@/consts";
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
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
  }));

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {Columns.map((column) => (
              <TableCell key={column.id}>{column.value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index.toString()}>
              {Object.keys(row).map((key) => {
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
