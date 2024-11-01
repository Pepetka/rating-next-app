import type { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse } from "msw";
import type { CategoryType } from "@/entities/Category";
import { Sidebar } from "./Sidebar";

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

const meta = {
  title: "shared/ui/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
    msw: {
      handlers: [
        http.post(`${process.env.NEXT_PUBLIC_API}/top-page/find`, () => {
          return HttpResponse.json(categories);
        }),
      ],
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
