import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";

import { RowAction, TransactionRow } from "../../app/transactions/types";

interface Props {
  rows: TransactionRow[];
}

export const TransactionsTableBody = ({ rows }: Props) => {
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
          {Object.keys(row).map((key, index) => {
            const value = Object.values(row)[index];
            if (typeof value === "string") {
              return <TableCell key={key}>{value}</TableCell>;
            }

            return _getRowActionsCell(value, row.id);
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};
