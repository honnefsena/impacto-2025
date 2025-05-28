import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Nova versão disponível. Recarregar?')) {
      updateSW()
    }
  },
  onOfflineReady() {
    console.log('App pronto para uso offline')
  },
})

createApp(App).use(router).mount('#app')
