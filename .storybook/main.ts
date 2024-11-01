import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  features: {
    experimentalRSC: true,
  },
  env: (config) => ({
    ...config,
    NEXT_PUBLIC_API: 'https://test/api',
  }),
  staticDirs: ['../public'],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
export default config;
