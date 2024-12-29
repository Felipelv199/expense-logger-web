import { SyntheticEvent } from "react";

import {
  Autocomplete,
  createFilterOptions,
  FilterOptionsState,
  TextField,
} from "@mui/material";

import { createCategory } from "@/api/categories";
import { Category } from "@/types";

export interface Option {
  value: string;
  inputValue?: string;
  text: string;
}

interface Props {
  options: Option[];
  onChangeSelection: (option?: Option) => void;
  refreshOptions: () => Promise<void>;
  selectedOption?: Option;
}

const filterOptions = createFilterOptions<Option>();

export const CategoriesSelect = ({
  options,
  onChangeSelection,
  refreshOptions,
  selectedOption,
}: Props) => {
  const _handleCreateCategory = async (
    option: Option | string
  ): Promise<Category | undefined> => {
    const inputValue = typeof option === "string" ? option : option.inputValue;

    if (!inputValue) return undefined;

    const response = await createCategory({ name: inputValue });
    return response;
  };

  const handleOnChange = async (
    event: SyntheticEvent,
    value: string | Option | null
  ) => {
    const valueExists = Boolean(value) && value !== null;
    const isString = typeof value === "string";
    const option = isString && options.find((o) => o.text === value);
    const isOption = valueExists && typeof value === "object";
    const isOptionWithInputValue = isOption && value.inputValue !== undefined;
    const isNewOption = valueExists && (isOptionWithInputValue || !option);

    if (isNewOption) {
      const category = await _handleCreateCategory(value);
      await refreshOptions();
      onChangeSelection(
        category
          ? { value: category.id.toString(), text: category.name }
          : undefined
      );
    } else if (isString) {
      onChangeSelection(options.find((o) => o.text === value));
    } else {
      onChangeSelection(value ?? undefined);
    }
  };

  const getFilterOptions = (
    options: Option[],
    params: FilterOptionsState<Option>
  ) => {
    const filtered = filterOptions(options, params);
    const { inputValue } = params;
    const isExisting = options.some((option) => inputValue === option.text);

    if (inputValue !== "" && !isExisting) {
      filtered.push({
        inputValue,
        text: `Add "${inputValue}"`,
        value: inputValue,
      });
    }

    return filtered;
  };

  const getOptionLabel = (option: Option | string) => {
    if (typeof option === "string") {
      return option;
    }

    if (option.inputValue) {
      return option.inputValue;
    }

    return option.text;
  };

  return (
    <Autocomplete
      value={selectedOption}
      onChange={handleOnChange}
      filterOptions={getFilterOptions}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={options}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {option.text}
          </li>
        );
      }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Category (Optional)" />
      )}
    />
  );
};
