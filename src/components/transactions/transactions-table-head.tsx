import { TableCell, TableHead, TableRow } from "@mui/material";

import { TransactionColumnNames } from "@/types/transactions";

interface Props {
  columns: TransactionColumnNames;
}

export const TransactionsTableHead = ({ columns }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {Object.keys(columns).map((column) => (
          <TableCell variant="head" key={column}>
            {column}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
