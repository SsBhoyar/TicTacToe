import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://SsBhoyar.github.io/TicTacToe",
  plugins: [react()],
  server: {
    host: '192.168.43.106',
    port: 5174
  }
})
