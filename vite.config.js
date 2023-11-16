import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://styrale.github.io/Portfolio-Lucas-Hammerer/",
  plugins: [react()],
})
