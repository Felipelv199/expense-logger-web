import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { createTransaction } from "@/api/transactions";
import { FormInputsValues, FormInputsHelperMessages } from "@/app/types";

import { CreateTransactionForm } from "./create-transaction-form";


const defaultInputsValues: FormInputsValues = {
  date: new Date(),
};

export const CreateTransactionDialog = () => {
  const [open, setOpen] = useState(false);
  const [inputsValues, setInputsValues] =
    useState<FormInputsValues>(defaultInputsValues);
  const [helperMessages, setHelperMessages] =
    useState<FormInputsHelperMessages>({});

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    clearHelperMessages();
    clearInputsValues();
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

    const { categoryId } = inputsValues;

    await createTransaction({
      amount: Number(amount),
      categoryId,
      date: date!,
      name: name!,
      description: description!,
    });

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
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add
      </Button>
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
    </>
  );
};
