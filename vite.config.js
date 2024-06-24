// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://outpost.mappls.com',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//       '/places': {
//         target: 'https://atlas.mappls.com/api',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/places/, ''),
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://outpost.mappls.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
      // "/api/places": {
      //   target: "https://atlas.mappls.com",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api\/places/, "api/places"),
      // },
    },
  },
});
