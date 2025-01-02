import { Chip, TableCell } from "@mui/material";

import { TableColumn, TransactionRowValue } from "@/app/transactions/types";

interface Props {
  value: TransactionRowValue;
  tableColumn: TableColumn;
}

export const TransactionsTableCell = ({ value, tableColumn }: Props) => {
  const columnId = tableColumn.id;
  if (columnId === "id") {
    return null;
  } else if (value === undefined) {
    return <TableCell key={columnId}>-</TableCell>;
  } else if (columnId === "category") {
    return (
      <TableCell key={columnId}>
        <Chip label={value as string} variant="outlined" />
      </TableCell>
    );
  } else {
    return <TableCell key={columnId}>{`${value}`}</TableCell>;
  }
};
