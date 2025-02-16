import { ReactNode } from "react";

import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";

import { HelperMessage } from "@/types/api";

interface Props {
  label?: string;
  value?: unknown;
  onChangeValue: (value: string) => void;
  helperMessage?: HelperMessage;
  startAdornment?: ReactNode;
  multiline?: boolean;
  rows?: number;
}

export default function InputText({
  label,
  value,
  onChangeValue,
  helperMessage,
  startAdornment,
  multiline,
  rows,
}: Readonly<Props>) {
  const isError = helperMessage?.type === "error";
  return (
    <FormControl error={isError}>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        startAdornment={startAdornment}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        label={label}
        multiline={multiline}
        rows={rows}
      />
      <FormHelperText sx={{ margin: 0 }}>
        {helperMessage?.message}
      </FormHelperText>
    </FormControl>
  );
}
