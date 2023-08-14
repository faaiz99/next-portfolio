/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals:true,
    environment: 'jsdom',
    setupFiles:'app/tests//setup/setup.ts',
    css:true,
    coverage:{
      provider:'v8',
      reporter: ['text', 'json', 'html'],
    }
  },

})
