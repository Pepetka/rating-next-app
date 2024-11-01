import type { Meta, StoryObj } from "@storybook/react";
import { CategoryType } from "@/entities/Category";
import { CategoryListItem } from "./CategoryListItem";

const meta = {
  title: "entities/Category/CategoryListItem",
  component: CategoryListItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CategoryListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const pages: CategoryType["pages"] = Array.from({ length: 5 }, (_, i) => ({
  _id: `${i}`,
  alias: `page${i}`,
  title: `Page ${i}`,
  category: `${i}`,
}));

export const Default: Story = {
  args: {
    title: "Category 1",
    pages,
  },
};

export const Opened: Story = {
  args: {
    title: "Category 1",
    pages,
    initialOpen: true,
  },
};
