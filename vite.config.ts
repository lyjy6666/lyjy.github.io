import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

function getPlugins() {
  return [react(), tsconfigPaths()];
}

export default defineConfig({
  base: './', // 若需相对路径可保留，不影响语法
  plugins: getPlugins(), // 确保 plugins 在 defineConfig 内
});