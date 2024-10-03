import { defineConfig } from "@playwright/test";

const baseURL = (() => {
  if (process.env.NODE_ENV === "production") return "https://best.com";

  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
})();

export default defineConfig({
  testDir: "tests",
  use: {
    baseURL: baseURL,
    trace: "retain-on-failure",
  },
  reporter: [["list"], ["html"]],
  webServer: {
    command: process.env.CI ? "npm run prod" : "npm run dev",
    port: 3000,
    reuseExistingServer: true,
  },
});
