import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
import { APP_URL } from "./tests/constants";

dotenv.config({
  path: path.resolve(".env"),
});

export default defineConfig({
  testDir: "tests",

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "auth.json",
        baseURL: APP_URL,
      },
      dependencies: ["setup"],
    },
    {
      name: "setup",
      testMatch: "tests/auth.setup.ts",
    },
  ],

  reporter: [["list"], ["html"]],
  use: {
    trace: "retain-on-failure",
  },
  webServer: {
    command: process.env.CI ? "npm run prod" : "npm run dev",
    port: 5173,
    reuseExistingServer: true,
  },
});
