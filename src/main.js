import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import '@/styles/index.scss'
import '@/icons'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
