import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.BASE_PATH ?? (process.env.VERCEL ? "/" : command === "build" ? "/expressive-profile/" : "/"),
  server: { port: 5230 },
}));
