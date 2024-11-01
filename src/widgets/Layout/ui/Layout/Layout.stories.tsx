import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

const meta = {
  title: "widgets/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
