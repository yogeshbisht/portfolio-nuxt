// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: { provider: "netlify" },

  modules: ["@nuxt/image", "nuxt-swiper", "@pinia/nuxt", "@nuxt/ui"],

  compatibilityDate: "2024-07-13",
});
