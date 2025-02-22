import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";

import { TableColumns, TableRow as TableRowType } from "@/types";
import { RowAction, TransactionColumnId } from "@/types/transactions";

interface Props {
  columns: TableColumns<TransactionColumnId>;
  rows: TableRowType<TransactionColumnId>[];
}

export const TransactionsTableBody = ({ columns, rows }: Props) => {
  const _getRowActionsCell = (rowActions: RowAction[], rowId: string) => {
    return (
      <TableCell align="right">
        {rowActions.map((action, index) => (
          <IconButton
            key={`cell-column-row-${rowId}-actions-${index}`}
            size="small"
            onClick={() => action.onClick(rowId)}
          >
            {action.icon}
          </IconButton>
        ))}
      </TableCell>
    );
  };

  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          {columns.map((column) => (
            <TableCell
              key={`${row.id}-${column.id}`}
              align={row[column.id].align}
            >
              {row[column.id].value}
            </TableCell>
          ))}
          {row.rowActions && _getRowActionsCell(row.rowActions, row.id)}
        </TableRow>
      ))}
    </TableBody>
  );
};
