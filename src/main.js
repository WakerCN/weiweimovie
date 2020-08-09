import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

Vue.config.productionTip = false

Vue.filter('setWH', (url) => {
  return url.replace(/\/w\.h/, '') + '@1l_1e_1c_128w_180h'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
