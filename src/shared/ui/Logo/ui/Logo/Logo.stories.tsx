import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
import { Logo } from "./Logo";

const meta = {
  title: "shared/ui/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof Logo>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
