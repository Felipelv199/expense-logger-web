import { InputAdornment, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

export const CreateTransactionForm = () => {
  return (
    <Stack gap={4}>
      <DatePicker />
      <TextField
        label="Amount"
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
      />
      <TextField label="Name" />
      <TextField label="Description" multiline rows={4} />
    </Stack>
  );
};
