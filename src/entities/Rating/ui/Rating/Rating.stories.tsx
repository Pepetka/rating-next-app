import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
import { Rating } from "./Rating";

const meta = {
  title: "entities/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    rating: {
      control: { type: "radio" },
      options: [1, 2, 3, 4, 5],
    },
  },
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof Rating>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 0,
  },
};

export const Rated: Story = {
  args: {
    rating: 3,
  },
};
