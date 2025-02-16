import React, { useState } from "react";

import { Edit as EditIcon } from "@mui/icons-material";
import {
  Paper,
  Skeleton,
  Table,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { fetchByPageTransactions } from "@/api/transactions";
import { TransactionsTableBody } from "@/components/transactions/transactions-table-body";
import { TransactionsTableHead } from "@/components/transactions/transactions-table-head";
import { Columns } from "@/consts/transactions";
import { mapTransactionToTransactionRow } from "@/mappers/transactionMapper";
import { PageSize, Transaction } from "@/types/api";
import { TransactionRow } from "@/types/transactions";

import EditTransactionDialog from "./edit-transaction-dialog";

interface Pagination {
  page: number;
  pageSize: PageSize;
  total: number;
}

export default function TransactionsTable() {
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  const { data: transactions } = useQuery({
    queryKey: ["transactions", pagination.page, pagination.pageSize],
    queryFn: () =>
      fetchByPageTransactions(pagination.page, pagination.pageSize),
    placeholderData: (previousData) => previousData,
  });

  const [isOpenEditDialog, setIsOpenEditDialog] = useState<boolean>(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction>();

  const isSkeleton = !transactions;

  if (isSkeleton) {
    return <Skeleton height={"50vh"} />;
  }

  const _getRow = (transaction: Transaction) => {
    const row = mapTransactionToTransactionRow(transaction);
    row.rowActions = [
      {
        icon: <EditIcon />,
        onClick: (rowId: string) => {
          setSelectedTransaction(
            transactions.data.find((t) => t.id === Number(rowId)),
          );
          setIsOpenEditDialog(true);
        },
      },
    ];
    return row;
  };

  const rows = transactions.data.map<TransactionRow>(_getRow);

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TransactionsTableHead columns={Columns} />
          <TransactionsTableBody rows={rows} />
        </Table>
      </TableContainer>
      <TablePagination
        count={transactions.total}
        page={transactions.page - 1}
        rowsPerPage={transactions.pageSize}
        onPageChange={(event, value) => {
          setPagination({ ...pagination, page: value + 1 });
        }}
        onRowsPerPageChange={(event) => {
          setPagination({
            ...pagination,
            pageSize: Number(event.target.value) as PageSize,
          });
        }}
      />
      <EditTransactionDialog
        isOpen={isOpenEditDialog}
        transaction={selectedTransaction}
        onClose={() => setIsOpenEditDialog(false)}
      />
    </>
  );
}
