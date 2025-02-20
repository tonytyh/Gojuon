import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), visualizer({
    filename: './dist/stats.html', // or wherever you prefer
    template: 'treemap',          // sunburst|treemap|network
    // open: true,                // set to true to automatically open the stats file in your browser
  })],
})