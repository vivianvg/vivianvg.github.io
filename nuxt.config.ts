// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',
  'bootstrap/dist/css/bootstrap.css',],
  target: 'static'
})
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vivianvg.github.io/" : "/",
};