import type { CategoryType } from "../types/types";

export const getCategories = async (firstCategory: number): Promise<CategoryType[]> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API + "/top-page/find", {
    method: "POST",
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ "content-type": "application/json" }),
  });
  return res.json();
};
