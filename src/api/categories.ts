import { Category, CreateCategoryRequest } from "@/types/api";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN as string;

export const fetchAllCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_DOMAIN}/categories`);
  return response.json();
};

export const createCategory = async (
  request: CreateCategoryRequest,
): Promise<Category> => {
  const response = await fetch(`${API_DOMAIN}/categories`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
