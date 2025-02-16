import { ReactNode, useEffect, useState } from "react";

import {
  DialogTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";

import CreateTransactionForm from "@/components/transactions/create-transaction-form";
import { Transaction } from "@/types/api";

import {
  FormInputsHelperMessages,
  FormInputsValues,
} from "../../app/transactions/types";

interface Props {
  isOpen: boolean;
  transaction: Transaction | undefined;
  onClose: () => void;
}

export default function EditTransactionDialog({
  isOpen,
  transaction,
  onClose,
}: Readonly<Props>): ReactNode {
  const [form, setForm] = useState<FormInputsValues>({});
  const [formHelperMessages, setFormHelperMessages] =
    useState<FormInputsHelperMessages>({});

  const handleOnClose = () => {
    setFormHelperMessages({});
    setForm({});
    onClose();
  };

  const onChange = (form: Partial<FormInputsValues>) => {
    setForm((prev) => ({ ...prev, ...form }));
  };

  useEffect(() => {
    if (transaction !== undefined) {
      setForm({
        amount: transaction.amount.toString(),
        date: new Date(transaction.date),
        description: transaction.description,
        name: transaction.name,
        categoryId: transaction.category?.id,
      });
    }
  }, [transaction]);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Transaction</DialogTitle>
      <DialogContent>
        <CreateTransactionForm
          form={form}
          formHelperMessages={formHelperMessages}
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Cancel</Button>
        <Button onClick={onClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
