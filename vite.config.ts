import {resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
})


  // server: {
  //   proxy: {
  //     '/frag': {
  //       target: 'https::/localhost:5000',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //     '/search': {
  //       target: 'https::/localhost:5000',
  //       changeOrigin: true,
  //       secure: false,
  //     }
  //   }
  // },