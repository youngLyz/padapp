import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './components/plugins/axios'
import './assets/css/reset.css'
import './assets/css/iconfont/iconfont.css'
import animate from 'animate.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(axios)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
