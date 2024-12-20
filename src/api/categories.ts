import { Category } from "@/types";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN as string;

export async function fetchAllCategories(): Promise<Category[]> {
  const response = await fetch(`${API_DOMAIN}/categories`);
  return response.json();
}

