import { useState } from "react";

import { Edit as EditIcon } from "@mui/icons-material";
import {
  Paper,
  Skeleton,
  Table,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";

import { TransactionsTableBody } from "@/components/transactions/transactions-table-body";
import { TransactionsTableHead } from "@/components/transactions/transactions-table-head";
import { TransactionColumns } from "@/consts/transactions";
import { mapTransactionToTableRow } from "@/mappers/transactionMapper";
import { PageSize } from "@/types";
import { Transaction } from "@/types/api";
import { Pagination, RowAction } from "@/types/transactions";

import EditTransactionDialog from "./edit-transaction-dialog";

interface Props {
  isLoading: boolean;
  transactions: Transaction[];
  onPaginationChange: (pagination: Pagination) => void;
  pagination: Pagination;
}

export default function TransactionsTable({
  isLoading,
  transactions,
  onPaginationChange,
  pagination,
}: Readonly<Props>) {
  const [isOpenEditDialog, setIsOpenEditDialog] = useState<boolean>(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction>();

  const rowActions: RowAction[] = [
    {
      icon: <EditIcon />,
      onClick: (rowId: string) => {
        setSelectedTransaction(
          transactions.find((t) => t.id === Number(rowId)),
        );
        setIsOpenEditDialog(true);
      },
    },
  ];

  const rows = transactions.map((transaction) =>
    mapTransactionToTableRow(transaction, rowActions),
  );

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TransactionsTableHead
            columns={TransactionColumns}
            hasRowActions={true}
          />
          <TransactionsTableBody columns={TransactionColumns} rows={rows} />
          <TableFooter>
            <TableRow>
              <TablePagination
                count={pagination.total}
                page={pagination.page - 1}
                rowsPerPage={pagination.pageSize}
                onPageChange={(event, value) => {
                  onPaginationChange({
                    ...pagination,
                    page: value + 1,
                  });
                }}
                onRowsPerPageChange={(event) => {
                  const pageSize = Number(event.target.value);
                  onPaginationChange({
                    ...pagination,
                    pageSize: pageSize as PageSize,
                  });
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <EditTransactionDialog
        isOpen={isOpenEditDialog}
        transaction={selectedTransaction}
        onClose={() => setIsOpenEditDialog(false)}
      />
    </>
  );
}
