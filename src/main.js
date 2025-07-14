import { createApp } from 'vue'
import App from './App.vue'
import globalConfig from './plugins/globalConfig'
import router from './router'
import { createBootstrap } from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

window.addEventListener('load', () => {
  // Wait 10 seconds before mounting app
  setTimeout(() => {
    const app = createApp(App)

    app.use(router)
    app.use(createBootstrap())
    app.use(globalConfig)

    app.mount('#app')

    // Fade out the preloader after mount
    const preloader = document.getElementById('preloader')
    if (preloader) {
      preloader.style.opacity = '0'
      preloader.style.transition = 'opacity 0.5s ease'
      setTimeout(() => {
        preloader.style.display = 'none'
      }, 500)
    }
  }, 2000) // 10 sec delay
})
