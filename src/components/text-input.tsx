import { HelperMessage } from "@/types/api";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";

interface Props {
  label?: string;
  value?: string;
  onChangeValue: (value: string) => void;
  helperMessage?: HelperMessage;
}

export function TextInput({
  label,
  value,
  onChangeValue,
  helperMessage,
}: Props) {
  return (
    <FormControl error={helperMessage?.type === "error"}>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        label={label}
      />
      <FormHelperText>{helperMessage?.message}</FormHelperText>
    </FormControl>
  );
}
