import path from 'path'

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [react()],
  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    }
  },
  server: {port: 3000}
})
