import { TableCell, TableHead, TableRow } from "@mui/material";

import { TableColumns } from "@/types";
import { TransactionColumnId } from "@/types/transactions";

interface Props {
  columns: TableColumns<TransactionColumnId>;
  hasRowActions?: boolean;
}

export const TransactionsTableHead = ({ columns, hasRowActions }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell variant="head" key={column.id}>
            {column.name}
          </TableCell>
        ))}
        {hasRowActions && <TableCell variant="head" />}
      </TableRow>
    </TableHead>
  );
};
