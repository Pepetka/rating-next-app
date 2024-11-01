import type { Meta, StoryObj } from "@storybook/react";
import { CategoryType } from "@/entities/Category";
import bookPrimaryIcon from "@/shared/assets/icons/book/book-primary.svg";
import bookIcon from "@/shared/assets/icons/book/book.svg";
import { CategoryList } from "./CategoryList";

const meta = {
  title: "entities/Category/CategoryList",
  component: CategoryList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CategoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

const categories: CategoryType[] = Array.from({ length: 5 }, (_, index) => ({
  _id: {
    secondCategory: `category ${index}`,
  },
  pages: Array.from({ length: 5 }, (_, i) => ({
    _id: `${i}`,
    alias: `page${i}`,
    title: `Page ${i}`,
    category: `${i}`,
  })),
}));

export const Default: Story = {
  args: {
    categories,
    title: "Categories",
    icon: bookIcon,
    activeIcon: bookPrimaryIcon,
    path: "/",
  },
};
