import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deploy:
//   For a PROJECT site (https://<user>.github.io/<repo>/) set base to '/<repo>/'.
//   For a USER site   (https://<user>.github.io/)         set base to '/'.
// Change the value below to match your repository name.
const repoName = 'guy-kiri-website'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
