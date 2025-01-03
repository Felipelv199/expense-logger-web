import { TableRow } from "@mui/material";

import { TransactionRow } from "@/app/transactions/types";
import { Columns } from "@/consts";

import { TransactionsTableCell } from "./transactions-table-cell";

interface Props {
  row: TransactionRow;
}

export const TransactionsTableRow = ({ row }: Props) => {
    const rowId = row.id as string;

  return (
    <TableRow key={rowId}>
      {Columns.map((column) => (
        <TransactionsTableCell
          key={column.id}
          value={row[column.id]}
          tableColumn={column}
        />
      ))}
    </TableRow>
  );
};
