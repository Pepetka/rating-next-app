import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
import { Tag } from "./Tag";

const meta = {
  title: "shared/ui/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    theme: {
      options: ["primary", "red", "green", "gray", "outline"],
      control: { type: "radio" },
    },
  },
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof Tag>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Some Tag",
    size: "small",
    theme: "primary",
  },
};

export const Green: Story = {
  args: {
    children: "Some Tag",
    size: "medium",
    theme: "green",
  },
};

export const Red: Story = {
  args: {
    children: "Some Tag",
    size: "medium",
    theme: "red",
  },
};

export const Gray: Story = {
  args: {
    children: "Some Tag",
    size: "medium",
    theme: "gray",
  },
};

export const Outline: Story = {
  args: {
    children: "Some Tag",
    size: "small",
    theme: "outline",
  },
};
