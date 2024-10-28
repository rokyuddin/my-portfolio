import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig(async () => {
  const tsconfigPaths = await import("vite-tsconfig-paths");
  const magicalSvg = await import("vite-plugin-magical-svg");

  return {
    plugins: [
      react(),
      tsconfigPaths.default(),
      magicalSvg.default({ target: "react" }),
    ],
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./vitest.setup.ts"],
    },
  };
});
