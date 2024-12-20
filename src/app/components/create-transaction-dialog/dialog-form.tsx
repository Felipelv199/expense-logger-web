import { InputAdornment, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { CategoriesSelect } from "./categories-select";
import { TextInput } from "@/components/text-input";
import { Form, FormHelperMessages } from "@/app/types";
import dayjs from "dayjs";

interface Props {
  form?: Form;
  formHelperMessages?: FormHelperMessages;
  onChange?: (form: Partial<Form>) => void;
}

export const CreateTransactionForm = ({
  form,
  formHelperMessages,
  onChange,
}: Props) => {
  const handleChangeValue = (form: Partial<Form>) => {
    if (onChange !== undefined) onChange(form);
  };

  return (
    <Stack gap={4} sx={{ p: [2, 0, 2, 0] }}>
      <DatePicker
        label="Date"
        value={form?.date ? dayjs(form?.date) : null}
        onChange={(value) => handleChangeValue({ date: value?.toDate() })}
      />
      <TextField
        label="Amount (Optional)"
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        value={form?.amount}
        onChange={(e) => handleChangeValue({ amount: Number(e.target.value) })}
      />
      <TextInput
        label="Name"
        value={form?.name}
        onChangeValue={(value) => handleChangeValue({ name: value })}
        helperMessage={formHelperMessages?.name}
      />
      <TextField
        label="Description (Optional)"
        multiline
        rows={4}
        fullWidth
        value={form?.description}
        onChange={(e) => handleChangeValue({ description: e.target.value })}
      />
      <CategoriesSelect
        value={form?.categoryId}
        onChangeValue={(value) => handleChangeValue({ categoryId: value })}
      />
    </Stack>
  );
};
