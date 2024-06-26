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
  modules: ["@nuxt/image", "nuxt-swiper", "@pinia/nuxt", "@nuxt/ui"],
  image: {
    provider: "netlify",
    netlify: {
      baseURL: process.env.HOME_URL,
    },
  },
});
