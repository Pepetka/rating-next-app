import { CategoriesSchema, CategoryType } from "../types/types";

export const getCategories = async (firstCategory: number): Promise<CategoryType[]> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API + "/top-page/find", {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ "content-type": "application/json" }),
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  const parsedData = CategoriesSchema.safeParse(data);

  if (!parsedData.success) {
    throw new Error("Failed to parse data: ", parsedData.error);
  }

  return data;
};
