import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
import searchIcon from "@/shared/assets/icons/search.svg";
import { Input } from "./Input";

const meta = {
  title: "shared/ui/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof Input>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconSrc: searchIcon,
    placeholder: "Search...",
  },
};
