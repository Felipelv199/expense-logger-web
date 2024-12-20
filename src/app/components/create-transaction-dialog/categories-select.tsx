import { fetchAllCategories } from "@/api/categories";
import { Category } from "@/types";
import { MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  value?: number;
  onChangeValue?: (value: number) => void;
}

export const CategoriesSelect = ({ value, onChangeValue }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const handleFetchCategories = async () => {
      const response = await fetchAllCategories();
      setCategories(response);
    };

    handleFetchCategories();
  }, []);

  return (
    <TextField
      label="Category (Optional)"
      select
      fullWidth
      value={value}
      onChange={(e) => onChangeValue && onChangeValue(Number(e.target.value))}
    >
      {categories.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
