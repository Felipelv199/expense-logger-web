import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { CreateTransactionForm } from "./DialogForm";

export const CreateTransactionDialog = () => {
  return (
    <>
      <Button>Create transaction</Button>
      <Dialog open={false} onClose={() => {}}>
        <DialogTitle>Create Transaction</DialogTitle>
        <DialogContent>
          <CreateTransactionForm />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => {}}>
            Cancel
          </Button>
          <Button onClick={() => {}} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
