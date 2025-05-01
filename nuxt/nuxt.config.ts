import { federation } from "@module-federation/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-10",

  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/svg-sprite",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/sitemap",
    "@nuxtjs/turnstile",
    "@nuxtjs/leaflet",
    "nuxt-security",
    "@nuxt/fonts",
  ],

  vite: {
    plugins: [
      federation({
        name: "nuxt",
        remotes: {
          remote: "http://localhost:5172/remoteEntry.js",
        },
        filename: "remoteEntry.js",
      }),
    ],
    build: {
      target: "esnext",
    },
  },

  features: {
    inlineStyles: (id) => !!id && id.includes(".vue"),
  },

  experimental: {
    asyncContext: true,
    appManifest: false,
    emitRouteChunkError: "automatic-immediate",
    asyncEntry: true,
  },

  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
    minify: true,
  },
});
