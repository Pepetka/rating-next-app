import { Decorator } from "@storybook/react";

export const VisualDecorator: Decorator = (Story) => (
  <div data-testid="story-wrapper" style={{ padding: "20px" }}>
    <Story />
  </div>
);
