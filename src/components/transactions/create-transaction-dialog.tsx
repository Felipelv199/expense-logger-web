import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { createTransaction } from "@/api/transactions";
import {
  FormInputsValues,
  FormInputsHelperMessages,
} from "@/app/transactions/types";
import CreateTransactionForm from "@/components/transactions/create-transaction-form";
import { mapFormInputsValuesToCreateTransactionRequest } from "@/mappers/transactionMapper";

const defaultInputsValues: FormInputsValues = {
  date: new Date(),
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateTransactionDialog({
  open,
  onClose,
}: Readonly<Props>) {
  const [inputsValues, setInputsValues] =
    useState<FormInputsValues>(defaultInputsValues);
  const [helperMessages, setHelperMessages] =
    useState<FormInputsHelperMessages>({});

  const handleClose = () => {
    clearHelperMessages();
    clearInputsValues();
    onClose();
  };

  const handleSave = async () => {
    clearHelperMessages();
    const { amount, name, date, description } = inputsValues;
    const newHelperMessages: FormInputsHelperMessages = {};

    if (!amount) {
      newHelperMessages.amount = {
        message: "Amount is required",
        type: "error",
      };
    }

    if (amount && isNaN(Number(amount))) {
      newHelperMessages.amount = {
        message: "Amount should be a number",
        type: "error",
      };
    }

    if (!date) {
      newHelperMessages.date = {
        message: "Date is required",
        type: "error",
      };
    }

    if (!description) {
      newHelperMessages.description = {
        message: "Description is required",
        type: "error",
      };
    }

    if (!name || name === "") {
      newHelperMessages.name = {
        message: "Name is required",
        type: "error",
      };
    }

    if (
      newHelperMessages.amount ||
      newHelperMessages.date ||
      newHelperMessages.description ||
      newHelperMessages.name
    ) {
      setHelperMessages((prev) => ({ ...prev, ...newHelperMessages }));
      return;
    }

    const createTransactionRequest =
      mapFormInputsValuesToCreateTransactionRequest(inputsValues);
    await createTransaction(createTransactionRequest);
    handleClose();
    clearInputsValues();
  };

  const clearInputsValues = () => setInputsValues(defaultInputsValues);

  const clearHelperMessages = () => setHelperMessages({});

  const updateInputsValues = (form: Partial<FormInputsValues>) => {
    const partialFormKey = Object.keys(form)[0];
    setHelperMessages({
      ...helperMessages,
      [partialFormKey]: undefined,
    });
    setInputsValues((prev) => (prev ? { ...prev, ...form } : prev));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Transaction</DialogTitle>
      <DialogContent>
        <CreateTransactionForm
          form={inputsValues}
          formHelperMessages={helperMessages}
          onChange={updateInputsValues}
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
  );
}
