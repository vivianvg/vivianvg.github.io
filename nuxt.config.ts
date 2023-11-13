// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',
  'bootstrap/dist/css/bootstrap.css',],
  router: {
    base: '/vivianvg.github.io/'
 },
  target: 'static'
})
