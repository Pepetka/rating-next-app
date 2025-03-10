import type { Preview } from "@storybook/react";
import { FontsDecorator, VisualDecorator } from "../src/shared/test/decorators";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../src/app/globals.css";

initialize({ onUnhandledRequest: "warn" });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [FontsDecorator, VisualDecorator],
  loaders: [mswLoader],
  tags: ["autodocs"],
};

export default preview;
