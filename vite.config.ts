// vite.config.ts
import * as path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig(async () => {
  const tailwindPlugin = (await import("@tailwindcss/vite")).default
  return {
    plugins: [react(), tailwindPlugin()],
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  }
})