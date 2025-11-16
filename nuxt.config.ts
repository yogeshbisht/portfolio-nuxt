import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/ui",
    "nuxt-swiper",
  ],

  compatibilityDate: "2024-11-01",
});