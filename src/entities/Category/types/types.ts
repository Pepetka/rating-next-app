import { z } from "zod";

const SubCategorySchema = z.object({
  _id: z.string(),
  alias: z.string(),
  title: z.string(),
  category: z.string(),
});

export const CategorySchema = z.object({
  _id: z.object({
    secondCategory: z.string(),
  }),
  pages: z.array(SubCategorySchema),
});

export const CategoriesSchema = z.array(CategorySchema);

export type CategoryType = z.infer<typeof CategorySchema>;
