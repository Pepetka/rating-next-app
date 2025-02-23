import { ConfigInput } from "testplane";

const config = {
  gridUrl: "local",
  baseUrl: "http://localhost:3000",
  pageLoadTimeout: 0,
  httpTimeout: 60000,
  testTimeout: 90000,
  sessionsPerBrowser: 1,
  testsPerSession: 50,
  resetCursor: false,
  screenshotDelay: 500,
  sets: {
    desktop: {
      files: ["testplane-tests/**/*.testplane.(t|j)s"],
      browsers: ["chrome", "firefox"],
    },
  },
  browsers: {
    chrome: {
      headless: true,
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
    firefox: {
      headless: true,
      desiredCapabilities: {
        browserName: "firefox",
      },
    },
  },
  plugins: {
    "html-reporter/testplane": {
      enabled: true,
      path: "testplane-report",
      defaultView: "all",
      diffMode: "3-up-scaled",
    },
    "@testplane/storybook": {},
  },
} satisfies ConfigInput;

export default config;
