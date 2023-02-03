import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import { astroImageTools } from 'astro-imagetools';

export default defineConfig({
  server: {
    port: 4040,
    host: true,
  },
  output: 'static',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap({
      canonicalURL: '',
      serialize(item) {
        if (/\//.test(item.url)) {
          item.changefreq = 'daily';
          item.lastmod = new Date();
          item.priority = 0.9;
        }
        return item;
      },
    }),
    astroImageTools,
    // image({
    //   serviceEntryPoint: "@astrojs/image/squoosh",
    //   logLevel: "debug",
    // }),
  ],
  // vite: {
  //   esbuild: {
  //     loader: "jsx",
  //     include: /src\/.*\.jsx?$/,
  //     exclude: [],
  //   },
  //   css: {
  //     preprocessorOptions: {
  //       less: {
  //         javascriptEnabled: true,
  //       },
  //     },
  //   },
  //   json: {
  //     stringify: true,
  //   },
  // },
  build: {
    minify: 'esbuild',
    brotliSize: true,
  },
  publicDir: 'public',
});
