import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enable global test functions (test, expect, describe)
    environment: "jsdom", // Enable DOM testing
    setupFiles: "./src/tests/setup.js", // Optional setup file
  },
});
