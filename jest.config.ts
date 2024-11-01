import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  ci: !!process.env.CI,
  rootDir: "./",
  testMatch: ["<rootDir>/src/**/*.test.ts?(x)"],
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.ts"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        darkTheme: true,
        openReport: false,
        failureMessageOnly: 2,
        includeConsoleLog: true,
        publicPath: "reports",
      },
    ],
  ],
};

export default createJestConfig(config);
