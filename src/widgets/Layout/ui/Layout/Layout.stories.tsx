import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
import { http, HttpResponse } from "msw";
import type { CategoryType } from "@/entities/Category";
import { Layout } from "./Layout";

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

const meta = {
  title: "widgets/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.post(`${process.env.NEXT_PUBLIC_API}/top-page/find`, () => {
          return HttpResponse.json(categories);
        }),
      ],
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/courses/page1",
      },
    },
  },
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof Layout>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
