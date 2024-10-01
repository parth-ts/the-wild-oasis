import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(".env"),
});

export default defineConfig({
  testDir: "tests",
  projects: [
    {
      name: "setup",
      testMatch: "tests/auth.setup.ts",
      // use: {
      //   baseURL: "http://localhost:5173",
      // },
    },
    {
      name: "Chromium",
      dependencies: ["setup"],
      use: {
        storageState: "auth.json",
        baseURL: "http://localhost:5173",
      },
    },
  ],
});
