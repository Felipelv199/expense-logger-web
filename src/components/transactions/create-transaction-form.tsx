import React, { useEffect, useState } from "react";

import { InputAdornment, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { fetchAllCategories } from "@/api/categories";
import {
  FormInputsHelperMessages,
  FormInputsValues,
} from "@/app/transactions/types";
import { Category } from "@/types/api";

import InputText from "../inputs/input-text";
import {
  InputTextAutocomplete,
  Option,
} from "../inputs/input-text-autocomplete";

interface Props {
  form: FormInputsValues;
  formHelperMessages?: FormInputsHelperMessages;
  onChange: (form: Partial<FormInputsValues>) => void;
}

export default function CreateTransactionForm({
  form,
  formHelperMessages,
  onChange,
}: Readonly<Props>) {
  const [categories, setCategories] = useState<Category[]>([]);

  const _mapCategoryToOption = (category: Category): Option => ({
    value: category.id.toString(),
    text: category.name,
  });

  useEffect(() => {
    const handleFetchCategories = async () => {
      const response = await fetchAllCategories();
      setCategories(response);
    };

    handleFetchCategories();
  }, []);

  const getSelectedOption = (categoryId: number | undefined) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? _mapCategoryToOption(category) : undefined;
  };

  const handleFetchCategories = async () => {
    const response = await fetchAllCategories();
    setCategories(response);
  };

  return (
    <Stack gap={2} sx={{ paddingTop: 3 }}>
      <DatePicker
        label="Date"
        value={dayjs(form.date)}
        onChange={(value) => onChange({ date: value?.toDate() })}
      />
      <InputText
        label="Amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        value={form.amount}
        onChangeValue={(value) => onChange({ amount: value })}
        helperMessage={formHelperMessages?.amount}
      />
      <InputText
        label="Name"
        value={form.name}
        onChangeValue={(value) => onChange({ name: value })}
        helperMessage={formHelperMessages?.name}
      />
      <InputText
        label="Description"
        multiline
        rows={4}
        value={form.description}
        onChangeValue={(value) => onChange({ description: value })}
        helperMessage={formHelperMessages?.description}
      />
      <InputTextAutocomplete
        options={categories.map(_mapCategoryToOption)}
        onChangeSelection={(option) =>
          onChange({
            categoryId: option?.value ? Number(option.value) : undefined,
          })
        }
        refreshOptions={handleFetchCategories}
        selectedOption={getSelectedOption(form.categoryId)}
      />
    </Stack>
  );
}
