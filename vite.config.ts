import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfgPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfgPaths(), react()],
})
