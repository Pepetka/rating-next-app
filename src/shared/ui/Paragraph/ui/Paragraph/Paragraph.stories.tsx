import type { Meta, StoryObj } from "@storybook/react";
import { WithTestplane } from "@testplane/storybook";
import { getStyleDecorator } from "@/shared/test/decorators";
import { Paragraph } from "./Paragraph";

const meta = {
  title: "shared/ui/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  decorators: [getStyleDecorator({ maxWidth: "500px", padding: "20px" })],
  testplane: {
    autoscreenshotSelector: "[data-testid='story-wrapper']",
  },
} satisfies WithTestplane<Meta<typeof Paragraph>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis cumque hic nam nostrum possimus quae, quasi quia ullam vitae! Deleniti eius fuga iusto laudantium mollitia obcaecati quidem recusandae ullam.",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis cumque hic nam nostrum possimus quae, quasi quia ullam vitae! Deleniti eius fuga iusto laudantium mollitia obcaecati quidem recusandae ullam.",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis cumque hic nam nostrum possimus quae, quasi quia ullam vitae! Deleniti eius fuga iusto laudantium mollitia obcaecati quidem recusandae ullam.",
    size: "large",
  },
};
