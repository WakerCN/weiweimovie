import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

/* ui库 begin */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'default-passive-events'
/* ui库 end */

/* 自定义全局组件 begin */
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'

Vue.use(MintUI)

Vue.component('Scroller', Scroller)
Vue.component('Loading', Loading)
/* 自定义全局组件 end */

/* 全局过滤器 begin */
Vue.filter('setWH', (url) => {
  return url.replace(/\/w\.h/, '') + '@1l_1e_1c_128w_180h'
})
/* 全局过滤器 end */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
