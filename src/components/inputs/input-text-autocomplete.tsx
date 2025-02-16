import { SyntheticEvent } from "react";

import {
  Autocomplete,
  createFilterOptions,
  FilterOptionsState,
  TextField,
} from "@mui/material";

import { createCategory } from "@/api/categories";
import { Category } from "@/types/api";

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

export const InputTextAutocomplete = ({
  options,
  onChangeSelection,
  refreshOptions,
  selectedOption,
}: Props) => {
  const _handleCreateCategory = async (
    option: Option | string,
  ): Promise<Category | undefined> => {
    const inputValue = typeof option === "string" ? option : option.inputValue;

    if (!inputValue) return undefined;

    const response = await createCategory({ name: inputValue });
    return response;
  };

  const handleOnChange = async (
    event: SyntheticEvent,
    value: string | Option | null,
  ) => {
    if (value === null) {
      onChangeSelection(undefined);
      return;
    }

    const isValueObject = typeof value === "object";
    const isValueString = typeof value === "string";

    if (isValueObject && value.inputValue) {
      const category = await _handleCreateCategory(value);
      await refreshOptions();
      onChangeSelection(
        category
          ? { value: category.id.toString(), text: category.name }
          : undefined,
      );
    } else if (isValueString) {
      onChangeSelection(options.find((o) => o.text === value));
    } else {
      onChangeSelection(value);
    }
  };

  const getFilterOptions = (
    options: Option[],
    params: FilterOptionsState<Option>,
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
