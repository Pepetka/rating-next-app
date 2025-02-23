import type { Meta, StoryObj } from "@storybook/react";
import type { WithTestplane } from "@testplane/storybook";
import { http, HttpResponse } from "msw";
import type { CategoryType } from "@/entities/Category";
import { Category } from "./Category";

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

const meta = {
  title: "entities/Category/Category",
  component: Category,
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
  decorators: [(story) => <div style={{ padding: "100px" }}>{story()}</div>],
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof Category>>;

export default meta;

export const Default: Story = {
  args: {
    item: 0,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/courses/some",
      },
    },
  },
};

export const Opened: Story = {
  args: {
    item: 0,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/courses/page10",
      },
    },
  },
};
