import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";

const meta = {
  title: "shared/ui/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    children: "Link",
  },
};
