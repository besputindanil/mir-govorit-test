import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/app.scss'
import api from '@/api/index'

Vue.config.productionTip = false

api.create()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
