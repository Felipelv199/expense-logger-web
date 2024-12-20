import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { CreateTransactionRequest } from "@/types/api";
import { FormHelperMessages } from "@/app/types";
import { CreateTransactionForm } from "./dialog-form";

export const CreateTransactionDialog = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<CreateTransactionRequest>();
  const [formHelperMessages, setFormHelperMessages] =
    useState<FormHelperMessages>();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    if (!form) return;

    const { name } = form;

    if (!name) {
      handleFormHelperUpdate({
        name: { message: "Name is required", type: "error" },
      });
      return;
    }

    handleClose();
  };

  const handleFormUpdate = (form: Partial<CreateTransactionRequest>) =>
    setForm((prev) => (prev ? { ...prev, ...form } : prev));

  const handleFormHelperUpdate = (
    formHelperMessages: Partial<FormHelperMessages>
  ) =>
    setFormHelperMessages((prev) =>
      prev ? { ...prev, ...formHelperMessages } : prev
    );

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { p: 2 } }}
      >
        <DialogTitle>Create Transaction</DialogTitle>
        <DialogContent>
          <CreateTransactionForm
            form={form}
            formHelperMessages={formHelperMessages}
            onChange={handleFormUpdate}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
