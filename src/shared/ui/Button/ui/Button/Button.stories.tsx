import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
import topIcon from "@/shared/assets/icons/arrow/arrow-white.svg";
import arrowIcon from "@/shared/assets/icons/arrow/arrow.svg";
import navIcon from "@/shared/assets/icons/nav.svg";
import searchIcon from "@/shared/assets/icons/search.svg";
import { Button } from "./Button";

const meta = {
  title: "shared/ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    theme: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "clear"],
    },
  },
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof Button>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click Me",
  },
};

export const PrimarySmall: Story = {
  args: {
    iconSrc: searchIcon,
    size: "small",
  },
};

export const PrimaryRounded: Story = {
  args: {
    iconSrc: topIcon,
    size: "medium",
    rounded: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Click Me",
    theme: "secondary",
  },
};

export const SecondarySmall: Story = {
  args: {
    size: "small",
    theme: "secondary",
    iconSrc: arrowIcon,
  },
};

export const SecondaryRounded: Story = {
  args: {
    iconSrc: navIcon,
    theme: "secondary",
    size: "medium",
    rounded: true,
  },
};

export const Clear: Story = {
  args: {
    children: "Click Me",
    theme: "clear",
  },
};

export const IconTop: Story = {
  args: {
    children: "Click Me",
    theme: "secondary",
    iconSrc: arrowIcon,
    iconDirection: "top",
  },
};

export const IconRight: Story = {
  args: {
    children: "Click Me",
    theme: "secondary",
    iconSrc: arrowIcon,
    iconDirection: "right",
  },
};

export const IconBottom: Story = {
  args: {
    children: "Click Me",
    theme: "secondary",
    iconSrc: arrowIcon,
    iconDirection: "bottom",
  },
};

export const IconLeft: Story = {
  args: {
    children: "Click Me",
    theme: "secondary",
    iconSrc: arrowIcon,
    iconDirection: "left",
  },
};
