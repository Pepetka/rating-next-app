import type { Decorator } from "@storybook/react";
import { CSSProperties } from "react";

export const getStyleDecorator =
  (style: CSSProperties): Decorator =>
  // eslint-disable-next-line react/display-name
  (Story) => {
    return (
      <div style={style}>
        <Story />
      </div>
    );
  };
