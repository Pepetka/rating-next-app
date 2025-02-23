import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
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
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof CategoryList>>;

export default meta;
type Story = StoryObj<typeof meta>;

const categories: CategoryType[] = Array.from({ length: 5 }, (_, index) => ({
  _id: {
    secondCategory: `category ${index}`,
  },
  pages: Array.from({ length: 5 }, (_, i) => ({
    _id: `${index * 5 + i}`,
    alias: `page${index * 5 + i}`,
    title: `Page ${index * 5 + i}`,
    category: `${index * 5 + i}`,
  })),
}));

export const Default: Story = {
  args: {
    categories,
    title: "Categories",
    icon: bookIcon,
    activeIcon: bookPrimaryIcon,
    path: "/category",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/category/some",
      },
    },
  },
};

export const Opened: Story = {
  args: {
    categories,
    title: "Categories",
    icon: bookIcon,
    activeIcon: bookPrimaryIcon,
    path: "/category",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/category/page1",
      },
    },
  },
};

export const Empty: Story = {
  args: {
    categories: [],
    title: "Categories",
    icon: bookIcon,
    activeIcon: bookPrimaryIcon,
    path: "/category1",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/category/page1",
      },
    },
  },
};
