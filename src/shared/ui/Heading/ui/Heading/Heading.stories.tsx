import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
  title: "shared/ui/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: "Heading",
    tag: "h1",
  },
};

export const H2: Story = {
  args: {
    children: "Heading",
    tag: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "Heading",
    tag: "h3",
  },
};
