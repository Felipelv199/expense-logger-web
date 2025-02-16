import { useState } from "react";

import { Button } from "@mui/material";

import CreateTransactionDialog from "@/components/transactions/create-transaction-dialog";

export default function CreateTransactionButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add
      </Button>
      <CreateTransactionDialog open={open} onClose={handleClose} />
    </>
  );
}
