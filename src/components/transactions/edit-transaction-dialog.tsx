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
} from "@/types/transactions";

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
    onClose();
    setFormHelperMessages({});
    setForm({});
  };

  const onChange = (form: Partial<FormInputsValues>) => {
    setForm((prev: FormInputsValues) => ({ ...prev, ...form }));
  };

  useEffect(() => {
    if (isOpen && transaction !== undefined) {
      setForm({
        amount: transaction.amount.toString(),
        date: new Date(transaction.date),
        description: transaction.description,
        name: transaction.name,
        categoryId: transaction.category?.id,
      });
    }
  }, [isOpen, transaction]);

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
