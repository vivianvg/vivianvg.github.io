
import { updateAppConfig } from '#app'
import { defuFn } from 'C:/Users/Vivian/Documents/GitHub/vivianvg.github.io/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "38781d31-7c0a-4380-b945-895a42da44c1"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
