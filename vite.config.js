import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  proxy:{
    '/':'http://localhost:8187'
  },
  plugins: [react()],
})
