import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    environment: "jsdom",
    setupFiles: ["./config/test/setup.ts"],
    include: ["./src/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [...configDefaults.exclude, "e2e/*"],
  },
});
